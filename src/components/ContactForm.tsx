import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2, Mail, MessageSquare, Send, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslations } from '@i18n/utils';
import type { Languages } from '@api/companies';

interface Props {
  lang?: Languages;
}

export function ContactForm({ lang = 'en' }: Props) {
  const [state, handleSubmit, reset] = useForm('mgoqglnb');
  const t = useTranslations(lang);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
        setName('');
        setEmail('');
        setMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  return (
    <div className='w-full max-w-2xl mx-auto'>
      <div className='mb-8 flex flex-col items-center gap-3 text-center'>
        <div className='flex w-fit mx-auto items-center justify-center gap-3'>
          <Send className='h-7 w-7 shrink-0 text-primary-gradient-1' />
          <h2 className='text-3xl font-bold w-fit m-0 inline-block'>{t('contact.title')}</h2>
        </div>
        <p className='text-muted-foreground max-w-lg'>
          {t('contact.description')}
        </p>
      </div>

      {state.succeeded ? (
        <div className='fade-in zoom-in flex animate-in flex-col items-center justify-center py-16 text-center duration-300 rounded-[20px] bg-[#131313]/50 backdrop-blur-md border border-white/10'>
          <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10'>
            <CheckCircle2 className='h-10 w-10 text-green-500' />
          </div>
          <h3 className='mb-2 font-medium text-foreground text-xl'>
            {t('contact.success')}
          </h3>
          <p className='text-muted-foreground'>
            {t('contact.success')}
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className='fade-in flex animate-in flex-col gap-6 duration-300'
        >
          <div className='space-y-5 rounded-[20px] border border-white/10 bg-[#131313]/50 backdrop-blur-md p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='name'
                className='font-medium text-foreground/90 text-sm'
              >
                {t('contact.name')}
              </label>
              <Input
                id='name'
                name='name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('contact.namePlaceholder')}
                icon={<User className='size-4' />}
              />
              <ValidationError
                field='name'
                prefix='Name'
                errors={state.errors}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                htmlFor='email'
                className='font-medium text-foreground/90 text-sm'
              >
                {t('contact.email')}
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('contact.emailPlaceholder')}
                icon={<Mail className='size-4' />}
              />
              <ValidationError
                field='email'
                prefix='Email'
                errors={state.errors}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                htmlFor='message'
                className='font-medium text-foreground/90 text-sm'
              >
                {t('contact.message')}
              </label>
              <Textarea
                id='message'
                name='message'
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('contact.messagePlaceholder')}
                icon={<MessageSquare className='size-4' />}
              />
              <ValidationError
                field='message'
                prefix='Message'
                errors={state.errors}
              />
            </div>
          </div>

          <div className='flex flex-col-reverse justify-between items-center gap-4 sm:flex-row'>
            <p className='w-full text-center sm:text-left text-muted-foreground text-xs sm:w-auto'>
              {t('contact.disclaimer')}
            </p>
            <div className='flex shrink-0 items-center gap-2 w-full sm:w-fit justify-end'>
              <Button
                type='submit'
                disabled={state.submitting || !name || !email || !message}
                className='w-full sm:min-w-[140px] sm:w-fit'
              >
                {state.submitting ? (
                  <span className='flex w-fit items-center gap-2'>
                    <span className='h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-white/30 border-t-white'></span>
                    <span>{t('contact.sending')}</span>
                  </span>
                ) : (
                  <span className='flex w-fit items-center gap-2'>
                    <Send className='h-4 w-4 shrink-0' />
                    <span>{t('contact.send')}</span>
                  </span>
                )}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
