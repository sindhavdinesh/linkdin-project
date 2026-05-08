# 📘 reamed – Notes App with LocalStorage

> **21 Days Frontend Challenge – Day 8**  
> *Guidance by Geerish Sir* | *Flow → Build → Real-World Project*

A fully functional, beautifully designed notes application built with **HTML, CSS, and JavaScript** as part of the **21 Days Frontend Challenge**. This app allows users to create, edit, delete, and persist notes directly in their browser using `localStorage`. It also features a dark/light mode toggle that remembers user preference.

---

## 📅 Challenge Progress

| Day | Project | Status |
|-----|---------|--------|
| Day 1 | Digital Clock | ✅ |
| Day 2 | Theme Toggle | ✅ |
| Day 3 | Responsive Navbar | ✅ |
| Day 4 | Image Slider | ✅ |
| Day 5 | Form Validation | ✅ |
| Day 6 | To-Do App (Basic) | ✅ |
| Day 7 | To-Do App (Advanced) | ✅ |
| **Day 8** | **Notes App** | ✅ **Completed** |
| Day 9-21 | Coming Soon | ⏳ |

---

## 🧠 Geerish Sir's Guidance – Flow First Approach

Before writing a single line of code, I followed the **FLOW TEMPLATE** as taught by Geerish Sir:

### 📋 Project Flow Planning

**Project Name:** reamed – Notes App

**Goal:** Users can create, edit, delete, and save notes persistently using localStorage.

**Features:**
- Add new note (title + body)
- Edit existing note
- Delete single note
- Delete all notes (with confirmation)
- Auto-save to localStorage
- Dark/light mode toggle with persistence
- Responsive grid layout

**Step-by-Step Flow:**
1. User opens the app → Load notes from localStorage → Render grid
2. User fills title & content → Clicks "Add Note" → Create note object with unique ID + timestamp → Push to array → Re-render → Save to localStorage
3. User clicks "Edit" on a note → Form populates with existing data → Button changes to "Update Note" → User modifies → Click update → Update array → Re-render → Reset form
4. User clicks "Delete" → Confirmation dialog → Remove from array → Re-render → Update localStorage
5. User clicks "Delete All" → Confirmation → Clear array → Show empty state
6. User clicks theme toggle → Toggle body class → Save preference in localStorage
7. Page reload → Load saved theme + saved notes

**UI Plan:**
- Header with title + theme toggle
- Editor card (title input, textarea, Add/Reset buttons)
- Notes grid (cards with title, preview, timestamp, edit/delete buttons)
- Footer with attribution

**Logic Plan:**
- `notesArray` stores `{ id, title, content, createdAt, updatedAt }`
- Functions: `renderNotes()`, `addNewNote()`, `updateNote()`, `deleteNoteById()`, `clearAllNotes()`, `saveToLocalStorage()`, `loadFromLocalStorage()`
- `editMode` flag + `currentEditId` to switch between add/update
- Event listeners for all interactions

**Edge Cases Handled:**
- ✅ Empty title & empty body → Alert user
- ✅ Empty title but non‑empty body → Auto‑assigns "📝 Note"
- ✅ Very long text → CSS `word-break: break-word`
- ✅ XSS protection → HTML escaping before rendering
- ✅ Editing a deleted note → Auto reset form
- ✅ No notes → Empty state placeholder

---

## ✨ Features

- ✅ **Create Notes** – Add a title and content for each note.
- ✅ **Edit Notes** – Click the edit button to modify existing notes.
- ✅ **Delete Notes** – Remove individual notes with confirmation.
- ✅ **Delete All Notes** – Clear entire collection with a single click.
- ✅ **Persistent Storage** – All notes are saved automatically to `localStorage` and survive page reloads.
- ✅ **Dark / Light Mode** – Toggle themes using the button in the header; preference is saved.
- ✅ **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices.
- ✅ **Smart Form Handling** – Form resets after adding/editing; edit mode changes button text.
- ✅ **Keyboard Shortcut** – Press `Ctrl + Enter` (or `Cmd + Enter` on Mac) to quickly save a note.
- ✅ **Empty State UI** – Shows a friendly message when no notes exist.
- ✅ **Timestamps** – Each note displays when it was last updated.

---

## 🔗 Links

| Link | URL |
|------|-----|
| 🌐 **Live Demo** | [Click here to view the live project](#) *(replace with your deployed link)* |
| 💻 **GitHub Repository** | [Click here to view source code](#) *(replace with your GitHub repo link)* |
| 📅 **Challenge Repository** | [21 Days Frontend Challenge](#) *(optional)* |

> ⚠️ **Note:** Update the links above with your actual deployed URL and GitHub repo URL after uploading.

---

## 📁 Project Structure
