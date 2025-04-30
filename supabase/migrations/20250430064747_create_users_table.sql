-- Create Users table
create table users(
  user_id text not null unique primary key,
  subscription_plan text null,
  stripe_customer_id text null,
  created_at timestamptz default now(),
  updated_at timestamptz null
);

-- Add a trigger to update the updated_at column on update
create extension if not exists moddatetime schema extensions;

create trigger handle_updated_at_users before update on users
  for each row execute procedure moddatetime (updated_at);

-- Enable RLS on the table
alter table "users" enable row level security;

-- This policy will enforce that only users where the `user_id` matches the Clerk user ID are returned.
CREATE POLICY "Select users policy" ON "public"."users" AS PERMISSIVE FOR
SELECT
  TO authenticated USING (requesting_user_id () = user_id);

-- This policy will enforce that only users where the `user_id` matches the Clerk user ID can be inserted.
CREATE POLICY "Insert users policy" ON "public"."users" AS PERMISSIVE
FOR INSERT
  WITH CHECK (requesting_user_id () = user_id);

-- This policy will enforce that only users where the `user_id` matches the Clerk user ID can be updated.
CREATE POLICY "Update users policy" ON "public"."users" AS PERMISSIVE
FOR UPDATE
  TO authenticated USING (requesting_user_id () = user_id);

-- This policy will enforce that only users where the `user_id` matches the Clerk user ID can be deleted.
CREATE POLICY "Delete users policy" ON "public"."users" AS PERMISSIVE 
FOR DELETE 
  TO authenticated USING (requesting_user_id () = user_id);