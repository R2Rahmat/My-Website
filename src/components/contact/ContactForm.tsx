
import { Form } from "@/components/ui/form";
import { ContactFormFields } from "./ContactFormFields";
import { ContactSubmitButton } from "./ContactSubmitButton";
import { useContactFormSubmission } from "./useContactFormSubmission";

const ContactForm = () => {
  const { form, isSubmitting, onSubmit } = useContactFormSubmission();

  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-portfolio-darkBlue">Send Me a Message</h2>
      
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-6">
          <ContactFormFields control={form.control} />
          <ContactSubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
