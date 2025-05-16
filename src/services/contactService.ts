
import { supabase } from "@/integrations/supabase/client";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        { 
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      ]);
      
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};

export const submitProjectInquiry = async (formData: ContactFormData & { projectType?: string }) => {
  try {
    const { data, error } = await supabase
      .from('project_inquiries')
      .insert([
        { 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          project_type: formData.subject || formData.projectType || 'General'
        }
      ]);
      
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting project inquiry:', error);
    return { success: false, error };
  }
};
