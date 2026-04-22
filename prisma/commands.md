# making changes
- edit prisma/schema.prisma
- run `npx prisma migrate dev --name <commit_message>`
this creates a migration file, applies to db, and regenerates the client

# misc commands
| Command                     | When to use 
|-----------------------------|----------------
| `npx prisma db push`        | Early prototyping — fast, no migration files created 
| `npx prisma migrate dev`    | Once you're past prototyping — creates versioned migration files 
| `npx prisma migrate deploy` | Production deploys — applies pending migrations without prompting 
| `npx prisma generate`       | After manually editing schema without migrating 