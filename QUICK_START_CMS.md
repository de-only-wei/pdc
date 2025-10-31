# 🚀 Quick Start - CMS

## Step 1: Access Admin Panel

Open your browser and visit:

```
http://localhost:3000/admin/login
```

## Step 2: Login

Use default credentials:

- **Username**: `admin`
- **Password**: `admin123`

![Login Screen]

## Step 3: Explore Dashboard

After login, you'll see:

- 📊 Statistics overview
- 📁 Quick action links
- ⚙️ System information

## Step 4: Manage Content

### Manage Projects

1. Click "Projects" in sidebar
2. Click "Add Project" button
3. Fill in project details
4. Add image URL
5. Click "Save"

### Manage Team

1. Click "Team" in sidebar
2. Add or edit team members
3. Toggle "Featured" to show on About page

### Manage Testimonials

1. Click "Testimonials"
2. Add client reviews
3. Set star rating (1-5)

### Update Settings

1. Click "Settings"
2. Edit company information
3. Update contact details
4. Modify statistics
5. Click "Save Changes"

## Step 5: View Changes

Open main website in new tab:

```
http://localhost:3000
```

Changes appear immediately!

## 🔒 Important Security Steps

### Before Production Deployment

Create `.env.local` file with:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your-32-char-random-string
```

Generate JWT secret:

```bash
openssl rand -base64 32
```

## 📁 What You Can Manage

| Content Type     | Features                                          |
| ---------------- | ------------------------------------------------- |
| **Projects**     | Add/Edit/Delete portfolio items, mark as featured |
| **Team**         | Manage team member profiles and bios              |
| **Testimonials** | Client reviews with star ratings                  |
| **Settings**     | Company info, contact details, statistics         |

## 🎨 CMS Features

✅ User-friendly interface  
✅ Real-time updates  
✅ Secure authentication  
✅ No coding required  
✅ Mobile responsive  
✅ Fast & efficient

## 💾 Data Backup

Your data is stored in `/data/` folder:

- `projects.json`
- `team.json`
- `testimonials.json`
- `settings.json`

**Backup regularly!**

```bash
cp -r data data-backup-$(date +%Y%m%d)
```

## 🆘 Need Help?

Check these guides:

1. **CMS_GUIDE.md** - Complete documentation
2. **README_CMS.md** - Quick reference
3. **CMS_SUMMARY.md** - Overview

## 🎯 Common Tasks

### Add a New Project

1. Admin → Projects → Add Project
2. Fill all fields
3. Use Unsplash for images
4. Check "Featured" for homepage
5. Save

### Update Company Phone

1. Admin → Settings
2. Find "Contact Information"
3. Edit phone number
4. Save Changes

### Add Team Member

1. Admin → Team → Add Team Member
2. Enter name, position, bio
3. Check "Featured" to show on About page
4. Save

## ✨ Pro Tips

💡 **Images**: Use https://unsplash.com for free high-quality images  
💡 **Backup**: Backup data files before major changes  
💡 **Preview**: Keep main site open to see changes  
💡 **Featured**: Only mark 1-2 projects as featured  
💡 **Format**: Use consistent formats (e.g., "RM 2.8M")

## 🎊 You're Ready!

Your CMS is fully functional. Start managing content now!

**Login**: http://localhost:3000/admin/login

---

Need detailed help? Read **CMS_GUIDE.md**


