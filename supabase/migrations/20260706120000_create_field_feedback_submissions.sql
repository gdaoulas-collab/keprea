-- Create a table for field feedback submissions (retours terrain agriculteurs/conseillers)
CREATE TABLE public.field_feedback_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  culture TEXT NOT NULL,
  region TEXT NOT NULL,
  product TEXT NOT NULL,
  feedback TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.field_feedback_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert field feedback (public form)
CREATE POLICY "Anyone can submit field feedback"
ON public.field_feedback_submissions
FOR INSERT
WITH CHECK (true);

-- Create policy to allow only admins to view submissions (for future admin panel)
CREATE POLICY "Only authenticated users can view field feedback"
ON public.field_feedback_submissions
FOR SELECT
USING (false); -- Will be updated when authentication is implemented
