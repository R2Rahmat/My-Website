
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormValues, projectTypes } from "./ContactFormSchema";

interface ContactFormFieldsProps {
  control: Control<FormValues>;
}

export const ContactFormFields = ({ control }: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-portfolio-dark">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="bg-white border-gray-200 text-portfolio-dark" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-portfolio-dark">Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} className="bg-white border-gray-200 text-portfolio-dark" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-portfolio-dark">Subject</FormLabel>
            <FormControl>
              <Input placeholder="Subject of your message" {...field} className="bg-white border-gray-200 text-portfolio-dark" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="projectType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-portfolio-dark">Project Type (Optional)</FormLabel>
            <FormControl>
              <select 
                className="w-full h-10 px-3 py-2 bg-white border border-gray-200 rounded-md text-portfolio-dark focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                {...field}
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-portfolio-dark">Message</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Your message" 
                className="min-h-[150px] bg-white border-gray-200 text-portfolio-dark" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
