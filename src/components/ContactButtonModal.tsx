import { Button } from '@components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2, Mail, MessageSquare, Send, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ContactButtonModal() {
  const [open, setOpen] = useState(false);
  const [state, handleSubmit, reset] = useForm('mgoqglnb');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        reset();
        setName('');
        setEmail('');
        setMessage('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='secondary' className='w-fit'>
          <Mail />
          <span>Contact Me</span>
        </Button>
      </DialogTrigger>

      <DialogContent className='border-white/10 sm:max-w-lg'>
        <DialogHeader className='mb-4'>
          <div className='flex items-center gap-2'>
            <Send className='h-5 w-5 text-primary-gradient-1' />
            <DialogTitle className='text-xl'>Contact Rafael</DialogTitle>
          </div>
          <DialogDescription>
            I'll reply within 24-48h. Please keep messages short and clear.
          </DialogDescription>
        </DialogHeader>

        {state.succeeded ? (
          <div className='fade-in zoom-in flex animate-in flex-col items-center justify-center py-12 text-center duration-300'>
            <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10'>
              <CheckCircle2 className='h-8 w-8 text-green-500' />
            </div>
            <h3 className='mb-2 font-medium text-foreground text-lg'>
              Message Sent!
            </h3>
            <p className='text-muted-foreground text-sm'>
              Thanks for reaching out. I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='fade-in flex animate-in flex-col gap-5 duration-300'
          >
            <div className='space-y-4 rounded-lg border border-white/5 bg-black/20 p-5'>
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='name'
                  className='font-medium text-foreground/90 text-sm'
                >
                  Your name
                </label>
                <Input
                  id='name'
                  name='name'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Full name'
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
                  Your email
                </label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='name@company.com'
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
                  Message
                </label>
                <Textarea
                  id='message'
                  name='message'
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Rafael, I'd like to discuss a retro-futuristic UI project..."
                  icon={<MessageSquare className='size-4' />}
                />
                <ValidationError
                  field='message'
                  prefix='Message'
                  errors={state.errors}
                />
              </div>
            </div>

            <div className='flex flex-col-reverse justify-between gap-4 sm:flex-col'>
              <p className='w-full max-w-full text-muted-foreground text-xs sm:w-auto'>
                By sending, you agree to receive a response by email.
              </p>
              <div className='flex shrink-0 flex-col-reverse items-center gap-2 sm:w-fit sm:flex-row sm:self-end'>
                <DialogClose asChild>
                  <Button
                    type='button'
                    variant='link'
                    className='text-sm sm:w-fit'
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type='submit'
                  disabled={state.submitting || !name || !email || !message}
                  className='min-w-[140px] sm:w-fit'
                >
                  {state.submitting ? (
                    <span className='flex w-fit items-center gap-2'>
                      <span className='h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-white/30 border-t-white'></span>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className='flex w-fit items-center gap-2'>
                      <Send className='h-4 w-4 shrink-0' />
                      <span>Send message</span>
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
