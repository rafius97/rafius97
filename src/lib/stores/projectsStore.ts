import { atom, onSet } from 'nanostores';

export type ViewMode = 'grid' | 'list';

// Atoms initialized to defaults to match SSR and prevent React Hydration Mismatch
export const $search = atom('');
export const $selectedTechs = atom<string[]>([]);
export const $viewMode = atom<ViewMode>('grid');

// Sync with URL when atoms change
if (typeof window !== 'undefined') {
  let isSyncingFromUrl = false;

  const syncUrl = () => {
    if (isSyncingFromUrl) return; // Prevent double-sync when updating from URL

    const params = new URLSearchParams(window.location.search);

    // Search
    const searchVal = $search.get();
    if (searchVal) params.set('search', searchVal);
    else params.delete('search');

    // Techs
    const techsVal = $selectedTechs.get();
    if (techsVal.length > 0) params.set('techs', techsVal.join(','));
    else params.delete('techs');

    // View Mode
    const viewVal = $viewMode.get();
    if (viewVal !== 'list') params.set('view', 'list');
    else params.delete('view');

    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
  };

  onSet($search, syncUrl);
  onSet($selectedTechs, syncUrl);
  onSet($viewMode, syncUrl);

  // Sync URL to state when navigating (e.g. initial load, back/forward buttons, or Astro client router)
  // This runs AFTER React hydration, preventing the "HTML didn't match client" error.
  document.addEventListener('astro:page-load', () => {
    isSyncingFromUrl = true;
    const params = new URLSearchParams(window.location.search);

    const urlSearch = params.get('search') ?? '';
    const urlTechs = params.get('techs') ?? '';
    const urlViewMode = (params.get('view') as ViewMode) ?? 'grid';

    if ($search.get() !== urlSearch) $search.set(urlSearch);

    const currentTechs = $selectedTechs.get().join(',');
    if (currentTechs !== urlTechs) {
      $selectedTechs.set(urlTechs ? urlTechs.split(',').filter(Boolean) : []);
    }

    if ($viewMode.get() !== urlViewMode) $viewMode.set(urlViewMode);

    isSyncingFromUrl = false;
  });
}
