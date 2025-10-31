# 🎯 Content Management System (CMS)

## Quick Start

### 1. Access the CMS

Visit: **http://localhost:3000/admin/login**

**Default Credentials:**

- Username: `admin`
- Password: `admin123`

### 2. Change Default Password

Create a `.env.local` file in the root directory:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=generate-a-random-32-character-string
```

To generate a secure JWT secret:

```bash
openssl rand -base64 32
```

## 📱 Features

### ✅ What You Can Manage

1. **Projects** - Portfolio items with images, details, and status
2. **Team Members** - Staff profiles with bios and positions
3. **Testimonials** - Client reviews and ratings
4. **Settings** - Company info, contact details, and statistics

### 🔒 Security

- JWT token-based authentication
- HTTP-only cookies
- Protected API routes
- Middleware route protection
- Session management

## 📂 CMS Structure

### Admin Pages

- `/admin/login` - Login page
- `/admin/dashboard` - Overview and statistics
- `/admin/projects` - Manage portfolio projects
- `/admin/team` - Manage team members
- `/admin/testimonials` - Manage client reviews
- `/admin/settings` - Company configuration

### API Endpoints

All data operations happen through API routes:

```
GET  /api/projects          - List all projects
POST /api/projects          - Create new project (auth)
PUT  /api/projects/[id]     - Update project (auth)
DELETE /api/projects/[id]   - Delete project (auth)

GET  /api/team              - List team members
POST /api/team              - Create team member (auth)

GET  /api/testimonials      - List testimonials
POST /api/testimonials      - Create testimonial (auth)

GET  /api/settings          - Get settings
PUT  /api/settings          - Update settings (auth)

POST /api/auth/login        - Admin login
POST /api/auth/logout       - Admin logout
GET  /api/auth/session      - Check session
```

## 💾 Data Storage

Content is stored in JSON files in the `/data` directory:

- `projects.json` - Portfolio projects
- `team.json` - Team members
- `testimonials.json` - Client testimonials
- `settings.json` - Company configuration

**Backup regularly!**

## 🎨 Managing Content

### Projects

Each project has:

- Title and location
- Category (Current/Previous)
- Architect name
- Project value
- Completion date
- Image URL
- Description
- Featured flag (show on homepage)

### Team Members

Each team member has:

- Name and position
- Email
- Bio
- Image URL (optional)
- Featured flag (show on About page)

### Testimonials

Each testimonial has:

- Client name
- Title/Company
- Review content
- Rating (1-5 stars)

### Settings

Manage:

- Company name and tagline
- Contact information
- Business hours
- Social media links
- Website statistics

## 🖼️ Managing Images

### Option 1: Use External URLs

Use image hosting services like Unsplash:

```
https://images.unsplash.com/photo-xxxxx
```

### Option 2: Local Images

1. Add images to `/public/images/`
2. Reference as: `/images/your-image.jpg`

## 🚀 Deployment

### Before Going Live

1. **Change Credentials**

   ```env
   ADMIN_USERNAME=your_secure_username
   ADMIN_PASSWORD=your_very_secure_password
   JWT_SECRET=your-random-32-char-string
   ```

2. **Backup Data**

   ```bash
   cp -r data data-backup-$(date +%Y%m%d)
   ```

3. **Security Checklist**

   - [ ] Changed default admin credentials
   - [ ] Set strong JWT_SECRET
   - [ ] Enabled HTTPS in production
   - [ ] Configured proper CORS settings
   - [ ] Set up regular backups
   - [ ] Tested all CRUD operations
   - [ ] Verified authentication works

4. **Environment Variables**

   Make sure these are set on your hosting platform (Vercel, Netlify, etc.):

   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `JWT_SECRET`
   - `NODE_ENV=production`

## 🔧 Troubleshooting

### Can't Login

1. Clear browser cookies
2. Check credentials in `.env.local`
3. Restart development server

### Changes Not Showing

1. Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
2. Check data files were updated
3. Clear browser cache

### "Unauthorized" Errors

- Your session expired
- Login again at `/admin/login`
- Check JWT_SECRET is set correctly

### Data Lost

1. Check `/data` directory exists
2. Verify JSON files are valid
3. Restore from backup if needed

## 📊 Usage Examples

### Adding a New Project

1. Go to `/admin/projects`
2. Click "Add Project"
3. Fill in all fields
4. Add image URL
5. Check "Featured" if it should appear on homepage
6. Click "Save"

### Updating Company Info

1. Go to `/admin/settings`
2. Edit any field
3. Click "Save Changes"
4. Refresh main website to see updates

### Managing Testimonials

1. Go to `/admin/testimonials`
2. Click "Add Testimonial"
3. Enter client details and review
4. Select rating (1-5 stars)
5. Save

## 🎓 Tips & Best Practices

1. **Regular Backups** - Backup `/data` folder daily
2. **Image Optimization** - Compress images before uploading
3. **Consistent Formatting** - Use consistent formats (e.g., "RM 2.8M")
4. **Feature Wisely** - Only mark 1-2 projects as featured
5. **Preview Changes** - Open website in new tab while editing
6. **Save Often** - Save your work frequently
7. **Test Changes** - View changes on actual website

## 📈 Future Enhancements

Possible improvements:

- ✨ Image upload functionality
- 📝 Rich text editor
- 🎨 Drag-and-drop ordering
- 📧 Email notifications
- 👥 Multi-user support
- 📊 Analytics dashboard
- 🗄️ Database integration (MongoDB/PostgreSQL)
- 🔍 Search and filtering
- 📱 Mobile app
- 🌐 Multi-language support

## 🆘 Support

Need help? Check:

1. `CMS_GUIDE.md` - Comprehensive guide
2. Browser console for errors
3. Server logs for API issues
4. Data files for content issues

## 🔐 Security Notes

**IMPORTANT:**

- Never commit `.env.local` to git
- Change default credentials immediately
- Use strong, unique passwords
- Enable HTTPS in production
- Regularly backup data
- Monitor for unauthorized access
- Keep dependencies updated

---

**CMS Version**: 1.0.0  
**Framework**: Next.js 15 + File-based Storage  
**Authentication**: JWT with HTTP-only cookies


