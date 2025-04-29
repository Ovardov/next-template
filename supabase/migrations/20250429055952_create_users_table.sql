-- Create Users table
create table users(
  user_id text not null unique primary key,
  email text not null,
  plan text not null,
  created_at timestamptz default now()
);

-- Enable RLS on the table
alter table "users" enable row level security;

-- This policy will enforce that only users where the `user_id` matches the Clerk user ID are returned.
CREATE POLICY "Select users policy" ON "public"."users" AS PERMISSIVE FOR
SELECT
  TO authenticated USING (requesting_user_id () = user_id);

-- This policy will enforce that only users where the `user_id` matches the Clerk user ID can be inserted.
CREATE POLICY "Update users policy" ON "public"."users" AS PERMISSIVE
FOR INSERT
  TO authenticated USING (requesting_user_id () = user_id);

-- This policy will enforce that only users where the `user_id` matches the Clerk user ID can be updated.
CREATE POLICY "Update users policy" ON "public"."users" AS PERMISSIVE
FOR UPDATE
  TO authenticated USING (requesting_user_id () = user_id);

-- This policy will enforce that only users where the `user_id` matches the Clerk user ID can be deleted.
CREATE POLICY "Delete users policy" ON "public"."users" AS PERMISSIVE FOR DELETE TO authenticated USING (requesting_user_id () = user_id);