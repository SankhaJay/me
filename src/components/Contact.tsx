
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <div className="h-0.5 flex-1 bg-border"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:sankhajay@gmail.com" 
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">Email</p>
                    <p className="text-muted-foreground">sankhajay@gmail.com</p>
                  </div>
                </a>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-lg font-medium mb-4">Find me on</p>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      target="https://github.com/SankhaJay" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} className="text-foreground" />
                    </a>
                    <a 
                      href="#" 
                      target="https://www.linkedin.com/in/sankhajay/" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-foreground" />
                    </a>
                    <a 
                      href="#" 
                      target="https://x.com/SankhaJay" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="X"
                    >
                      <Twitter size={20} className="text-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all",
                      isSubmitting 
                        ? "bg-primary/70 cursor-not-allowed" 
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sankha Jayalath. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
