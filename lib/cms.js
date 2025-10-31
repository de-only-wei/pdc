import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

export function readData(filename) {
  const filePath = path.join(dataDir, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function writeData(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Projects
export function getProjects() {
  return readData("projects.json");
}

export function getProjectById(id) {
  const projects = getProjects();
  return projects.find((p) => p.id === parseInt(id));
}

export function createProject(project) {
  const projects = getProjects();
  const newProject = {
    ...project,
    id: Math.max(...projects.map((p) => p.id), 0) + 1,
  };
  projects.push(newProject);
  writeData("projects.json", projects);
  return newProject;
}

export function updateProject(id, updates) {
  const projects = getProjects();
  const index = projects.findIndex((p) => p.id === parseInt(id));
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...updates, id: parseInt(id) };
  writeData("projects.json", projects);
  return projects[index];
}

export function deleteProject(id) {
  const projects = getProjects();
  const filtered = projects.filter((p) => p.id !== parseInt(id));
  writeData("projects.json", filtered);
  return filtered.length < projects.length;
}

// Testimonials
export function getTestimonials() {
  return readData("testimonials.json");
}

export function createTestimonial(testimonial) {
  const testimonials = getTestimonials();
  const newTestimonial = {
    ...testimonial,
    id: Math.max(...testimonials.map((t) => t.id), 0) + 1,
  };
  testimonials.push(newTestimonial);
  writeData("testimonials.json", testimonials);
  return newTestimonial;
}

export function updateTestimonial(id, updates) {
  const testimonials = getTestimonials();
  const index = testimonials.findIndex((t) => t.id === parseInt(id));
  if (index === -1) return null;
  testimonials[index] = {
    ...testimonials[index],
    ...updates,
    id: parseInt(id),
  };
  writeData("testimonials.json", testimonials);
  return testimonials[index];
}

export function deleteTestimonial(id) {
  const testimonials = getTestimonials();
  const filtered = testimonials.filter((t) => t.id !== parseInt(id));
  writeData("testimonials.json", filtered);
  return filtered.length < testimonials.length;
}

// Team
export function getTeam() {
  return readData("team.json");
}

export function createTeamMember(member) {
  const team = getTeam();
  const newMember = {
    ...member,
    id: Math.max(...team.map((m) => m.id), 0) + 1,
  };
  team.push(newMember);
  writeData("team.json", team);
  return newMember;
}

export function updateTeamMember(id, updates) {
  const team = getTeam();
  const index = team.findIndex((m) => m.id === parseInt(id));
  if (index === -1) return null;
  team[index] = { ...team[index], ...updates, id: parseInt(id) };
  writeData("team.json", team);
  return team[index];
}

export function deleteTeamMember(id) {
  const team = getTeam();
  const filtered = team.filter((m) => m.id !== parseInt(id));
  writeData("team.json", filtered);
  return filtered.length < team.length;
}

// Settings
export function getSettings() {
  return readData("settings.json");
}

export function updateSettings(updates) {
  const settings = getSettings();
  const newSettings = { ...settings, ...updates };
  writeData("settings.json", newSettings);
  return newSettings;
}


