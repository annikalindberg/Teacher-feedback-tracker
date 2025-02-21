/*
  # Create feedback tracking table

  1. New Tables
    - `group_feedback`
      - `id` (uuid, primary key)
      - `group_number` (integer)
      - `checked` (boolean)
      - `notes` (text)
      - `feedback_date` (timestamptz)
      - `user_id` (uuid, foreign key to auth.users)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `group_feedback` table
    - Add policies for authenticated users to manage their own feedback entries
*/

CREATE TABLE IF NOT EXISTS group_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_number integer NOT NULL,
  checked boolean DEFAULT false,
  notes text DEFAULT '',
  feedback_date timestamptz,
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE group_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can create their own feedback entries"
  ON group_feedback
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own feedback entries"
  ON group_feedback
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own feedback entries"
  ON group_feedback
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_group_feedback_user_id ON group_feedback(user_id);
CREATE INDEX idx_group_feedback_date ON group_feedback(feedback_date);