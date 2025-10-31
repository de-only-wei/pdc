# Prosper Dynamic Construction - CMS Guide

## 🎯 Overview

A complete Content Management System (CMS) has been implemented for the Prosper Dynamic Construction website. This CMS allows you to manage all website content without touching code.

## 🔐 Accessing the CMS

### Login Credentials (Default)

- **URL**: http://localhost:3000/admin/login
- **Username**: `admin`
- **Password**: `admin123`

⚠️ **IMPORTANT**: Change these credentials before going to production!

### Changing Credentials

Set environment variables in a `.env.local` file:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_very_secure_random_string
```

## 📂 CMS Structure

### Data Storage

All content is stored in JSON files in the `/data` directory:

- `projects.json` - Portfolio projects
- `testimonials.json` - Client testimonials
- `team.json` - Team members
- `settings.json` - Company information and settings

### Admin Dashboard

Access at: `/admin/dashboard`

Features:

- Overview statistics
- Quick actions
- System information

## 📋 Content Management

### 1. Projects Management (`/admin/projects`)

Manage your portfolio projects with:

- **Title** - Project name
- **Location** - Project location
- **Category** - Current or Previous
- **Architect** - Architect name
- **Value** - Project value (e.g., RM 2.8M)
- **Completion** - Completion date
- **Image URL** - Project image (use Unsplash or upload to `/public/images/`)
- **Description** - Project description
- **Featured** - Mark as featured project (shown on homepage)

### 2. Team Management (`/admin/team`)

Manage team members:

- Name
- Position/Title
- Email
- Bio
- Full Bio (for featured members)
- Quote (optional)
- Image URL
- Featured (show on About page)

### 3. Testimonials Management (`/admin/testimonials`)

Manage client testimonials:

- Client Name
- Title/Company
- Testimonial Content
- Rating (1-5 stars)

### 4. Settings Management (`/admin/settings`)

Update company information:

- **Company Details**

  - Company name
  - Tagline
  - Description
  - Established year

- **Contact Information**

  - Address
  - Phone numbers
  - Fax
  - Emails

- **Business Hours**

  - Weekday hours
  - Saturday hours
  - Sunday status

- **Social Media Links**

  - Facebook
  - Instagram
  - LinkedIn

- **Statistics**
  - Years of experience
  - Projects completed
  - Client satisfaction
  - Team size

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/login` - Login to admin
- `POST /api/auth/logout` - Logout
- `GET /api/auth/session` - Check session

### Projects

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project (auth required)
- `GET /api/projects/[id]` - Get single project
- `PUT /api/projects/[id]` - Update project (auth required)
- `DELETE /api/projects/[id]` - Delete project (auth required)

### Testimonials

- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial (auth required)

### Team

- `GET /api/team` - Get all team members
- `POST /api/team` - Create team member (auth required)

### Settings

- `GET /api/settings` - Get settings
- `PUT /api/settings` - Update settings (auth required)

## 🖼️ Image Management

### Option 1: Use External URLs

Use Unsplash or other image hosting:

```
https://images.unsplash.com/photo-xxxxx
```

### Option 2: Upload to Public Folder

1. Add images to `/public/images/`
2. Reference as `/images/your-image.jpg`

## 🔒 Security Features

1. **JWT Authentication** - Secure token-based auth
2. **Protected Routes** - Middleware protects admin pages
3. **HTTP-Only Cookies** - Secure cookie storage
4. **API Protection** - All write operations require authentication

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Change default admin credentials
- [ ] Set strong JWT_SECRET environment variable
- [ ] Enable HTTPS (cookies set to secure in production)
- [ ] Backup data files regularly
- [ ] Consider moving to database (MongoDB, PostgreSQL)
- [ ] Set up proper image hosting (Cloudinary, AWS S3)
- [ ] Configure CORS if needed
- [ ] Enable rate limiting on API routes
- [ ] Set up monitoring and logging

## 💾 Backing Up Data

Your data files are in `/data/`:

```bash
# Backup command
cp -r data data-backup-$(date +%Y%m%d)
```

Schedule regular backups!

## 🔧 Troubleshooting

### "Unauthorized" errors

- Clear browser cookies
- Login again at `/admin/login`

### Changes not reflecting

- Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Check that you saved changes
- Verify data files were updated

### Lost admin password

1. Delete `/data/settings.json` backup
2. Restart server
3. Login with default credentials
4. Change password immediately

## 📱 Usage Tips

1. **Regular Backups** - Backup `/data` folder regularly
2. **Image Optimization** - Optimize images before uploading
3. **Content Preview** - View website in new tab while editing
4. **Consistent Formatting** - Use consistent formats for values (e.g., "RM 2.8M")
5. **Featured Content** - Mark only 1-2 projects as featured for homepage

## 🆘 Support

For issues or questions:

1. Check this guide
2. Review code comments
3. Check browser console for errors
4. Review server logs

## 📈 Future Enhancements

Possible improvements:

- Image upload functionality
- Rich text editor for descriptions
- Drag-and-drop project ordering
- Activity logs
- Multi-user support with roles
- Database integration
- Email notifications
- Content versioning
- Media library

---

**Version**: 1.0.0  
**Last Updated**: 2024


