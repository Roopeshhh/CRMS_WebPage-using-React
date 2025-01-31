import React from "react";
import { useState } from "react";

import {
  FaSearch,
  FaUpload,
  FaFolder,
  FaFilePdf,
  FaImage,
  FaVideo,
  FaMusic,
  FaGoogle,
  FaDropbox,
  FaClock,
  FaStar,
  FaArchive,
  FaTrash,
  FaCog,
  FaDatabase,
  FaEllipsisV,
  FaFileExcel,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaFile,
  FaRedo,
} from "react-icons/fa";
import FileTable from "./FileManager.json";

import "./FileManager.css";

const FileManager = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Add this function to handle file uploads
  const handleFileUpload = (files) => {
    // Handle file upload logic here
    console.log("Files to upload:", files);
  };

  return (
    <div className="file-manager" style={{ marginLeft: "17%" }}>
      {/* Header */}
      <div className="file-manager-header">
        <div className="header-left">
          <h2>File Manager</h2>
          <p className="text-muted">Manage your files</p>
        </div>
        <div className="header-right" style={{ margin: "20px" }}>
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle">
              Owned By Me
            </button>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => setShowUploadModal(true)}
          >
            <FaUpload className="me-2" />
            Upload Files
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="file-manager-content">
        {/* Left Sidebar */}
        <div className="file-sidebar">
          <div className="files-header">
            <FaFolder /> Files
          </div>

          <button className="btn-new">
            <span className="plus-icon">+</span> New
          </button>

          <ul className="sidebar-menu">
            <li className="menu-item active">
              <FaFolder className="menu-icon" />
              <span>My Files</span>
            </li>
            <li className="menu-item">
              <FaGoogle className="menu-icon" />
              <span>Google Drive</span>
            </li>
            <li className="menu-item">
              <FaDropbox className="menu-icon" />
              <span>Dropbox</span>
            </li>
            <li className="menu-item">
              <FaFolder className="menu-icon" />
              <span>Shared With Me</span>
            </li>
            <li className="menu-item">
              <FaFolder className="menu-icon" />
              <span>Document</span>
            </li>
            <li className="menu-item">
              <FaClock className="menu-icon" />
              <span>Recent</span>
            </li>
            <li className="menu-item">
              <FaStar className="menu-icon" />
              <span>Favourites</span>
            </li>
            <li className="menu-item">
              <FaArchive className="menu-icon" />
              <span>Archived</span>
            </li>
            <li className="menu-item">
              <FaTrash className="menu-icon" />
              <span>Deleted</span>
            </li>
            <li className="menu-item">
              <FaCog className="menu-icon" />
              <span>Settings</span>
            </li>
          </ul>

          <div className="storage-info">
            <div className="storage-header">
              <FaDatabase className="menu-icon" />
              <span>Storage</span>
            </div>
            <div className="storage-progress">
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="storage-text">78.5 GB of 1 TB Free Used</div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="file-content">
          <div className="content-header">
            <div className="search-sort">
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle">
                  Sort by Date
                </button>
              </div>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
                <FaSearch className="search-icon" />
              </div>
            </div>
            <div className="view-filters">
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle">
                  Recent
                </button>
              </div>
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle">
                  All File types
                </button>
              </div>
            </div>
          </div>

          <h3 className="section-title">Overview</h3>

          <div className="file-grid">
            <div className="file-card">
              <div className="card-icon folder">
                <FaFolder />
              </div>
              <div className="card-info">
                <h4>Folders</h4>
                <p>300 Files</p>
              </div>
            </div>
            <div className="file-card">
              <div className="card-icon pdf">
                <FaFilePdf />
              </div>
              <div className="card-info">
                <h4>PDF</h4>
                <p>50 Files</p>
              </div>
            </div>
            <div className="file-card">
              <div className="card-icon image">
                <FaImage />
              </div>
              <div className="card-info">
                <h4>Images</h4>
                <p>240 Files</p>
              </div>
            </div>
            <div className="file-card">
              <div className="card-icon video">
                <FaVideo />
              </div>
              <div className="card-info">
                <h4>Videos</h4>
                <p>30 Files</p>
              </div>
            </div>
            <div className="file-card">
              <div className="card-icon audio">
                <FaMusic />
              </div>
              <div className="card-info">
                <h4>Audios</h4>
                <p>100 Files</p>
              </div>
            </div>
          </div>
          {/* ............ */}
          <div className="section">
            <div className="section-header">
              <h2>
                Folders
                <span className="nav-arrows">
                  <FaChevronLeft style={{ fontSize: "12px" }} />
                  <FaChevronRight style={{ fontSize: "12px" }} />
                </span>
              </h2>
            </div>

            <div className="folders-grid">
              {/* Folder Card 1 */}
              <div className="folder-card">
                <div className="folder-header">
                  <div className="folder-title">
                    <FaFolder style={{ color: "#FFD700" }} />
                    <span>Project Details</span>
                  </div>
                  <FaEllipsisV className="more-icon" />
                </div>
                <div className="folder-info">
                  Project plan • 154 KB • 8 Files
                </div>
                <div className="folder-footer">
                  <div className="members">
                    <div className="avatars">
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg"
                        alt=""
                      />
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                        alt=""
                      />
                    </div>
                    <span className="member-count">1 Members</span>
                  </div>
                  <FaStar className="star-icon" />
                </div>
              </div>

              {/* Folder Card 2 */}
              <div className="folder-card">
                <div className="folder-header">
                  <div className="folder-title">
                    <FaFolder style={{ color: "#FFD700" }} />
                    <span>Project Details</span>
                  </div>
                  <FaEllipsisV className="more-icon" />
                </div>
                <div className="folder-info">
                  Project plan • 154 KB • 8 Files
                </div>
                <div className="folder-footer">
                  <div className="members">
                    <div className="avatars">
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-06.jpg"
                        alt=""
                      />
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-14.jpg"
                        alt=""
                      />
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-15.jpg"
                        alt=""
                      />
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg"
                        alt=""
                      />
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-17.jpg"
                        alt=""
                      />
                    </div>
                    <span className="member-count">+9 Members</span>
                  </div>
                  <FaStar className="star-icon" />
                </div>
              </div>

              {/* Folder Card 3 */}
              <div className="folder-card">
                <div className="folder-header">
                  <div className="folder-title">
                    <FaFolder style={{ color: "#FFD700" }} />
                    <span>Project Details</span>
                  </div>
                  <FaEllipsisV className="more-icon" />
                </div>
                <div className="folder-info">
                  Project plan • 154 KB • 8 Files
                </div>
                <div className="folder-footer">
                  <div className="members">
                    <div className="avatars">
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-18.jpg"
                        alt=""
                      />
                      <img
                        src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-05.jpg"
                        alt=""
                      />
                    </div>
                    <span className="member-count">+2 Members</span>
                  </div>
                  <FaStar className="star-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Files Section */}
          <div className="section">
            <div className="section-header">
              <h2>
                Files
                <span className="nav-arrows">
                  <FaChevronLeft style={{ fontSize: "12px" }} />{" "}
                  <FaChevronRight style={{ fontSize: "12px" }} />
                </span>
              </h2>
            </div>

            <div className="files-grid">
              {/* PDF File 1 */}
              <div className="file-item">
                <div className="file-icon">
                  <FaFilePdf style={{ color: "#FF0000" }} />
                </div>
                <div className="file-details">
                  <h4>hsa.pdf</h4>
                  <span>12 Jul • 85 MB</span>
                </div>
                <div className="file-actions">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </div>
              </div>

              {/* PDF File 2 */}
              <div className="file-item">
                <div className="file-icon">
                  <FaFilePdf style={{ color: "#FF0000" }} />
                </div>
                <div className="file-details">
                  <h4>Haird.pdf</h4>
                  <span>14 Jul • 4 MB</span>
                </div>
                <div className="file-actions">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </div>
              </div>

              {/* Excel File */}
              <div className="file-item">
                <div className="file-icon">
                  <FaFileExcel style={{ color: "#007F00" }} />
                </div>
                <div className="file-details">
                  <h4>Estimation.xls</h4>
                  <span>14 Jul • 500 KB</span>
                </div>
                <div className="file-actions">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </div>
              </div>
            </div>
          </div>
          {/* ................ */}
        
        </div>
      </div>

      {/* Videos Section */}
      <div className="section" style={{ marginLeft: "23.5%" }}>
        <div className="section-header">
          <h2>
            Videos
            <span className="nav-arrows">
              <FaChevronLeft style={{ fontSize: "12px" }} />{" "}
              <FaChevronRight style={{ fontSize: "12px" }} />
            </span>
          </h2>
        </div>

        <div className="videos-grid">
          {/* Video 1 */}
          <div className="video-card">
            <div className="video-thumbnail">
              <img
                src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
                alt="Demo_dw"
              />
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
            <div className="video-details">
              <h4>Demo_dw</h4>
              <div className="video-info">
                <span>12 Jul • 5 MB</span>
                <div className="video-actions">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="video-card">
            <div className="video-thumbnail">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                alt="Android_bike"
              />
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
            <div className="video-details">
              <h4>Android_bike.mp4</h4>
              <div className="video-info">
                <span>14 Jul • 23 MB</span>
                <div className="video-actions">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Video 3 */}
          <div className="video-card">
            <div className="video-thumbnail">
              <img
                src="https://static.vecteezy.com/system/resources/previews/032/250/860/large_2x/beautiful-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-ai-generated-free-photo.jpg"
                alt="Demoparticles"
              />
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
            <div className="video-details">
              <h4>Demoparticles.mp4</h4>
              <div className="video-info">
                <span>14 Jul • 173 MB</span>
                <div className="video-actions">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* table section */}
      {/* All Files Table Section */}
      <div className="section" style={{ marginLeft: "23.5%" }}>
        <h2 className="table-title">All Files</h2>
        <div className="file-table-container">
          <table className="file-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Name</th>
                <th>Last Modified</th>
                <th>Size</th>
                <th>Owned Memebr</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="file-name">
                  <FaFolder style={{ color: "#FFC107" }} />
                  <span>Digimed</span>
                </td>
                <td>Today 08:30 AM by Angel</td>
                <td>200 MB</td>
                <td className="owner-cell">
                  <div className="owner-info">
                    <img
                      src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-06.jpg"
                      alt="Nolan Christopher"
                      className="owner-avatar"
                    />
                    <span>Nolan Christopher</span>
                  </div>
                </td>
                <td className="action-cell">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="file-name">
                  <FaFileExcel style={{ color: "#217346" }} />
                  <span>Estimation</span>
                </td>
                <td>Today 09:20 AM</td>
                <td>140 MB</td>
                <td className="owner-cell">
                  <div className="owner-info">
                    <img
                      src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-05.jpg"
                      alt="Nolan Harris"
                      className="owner-avatar"
                    />
                    <span>Nolan Harris</span>
                  </div>
                </td>
                <td className="action-cell">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="file-name">
                  <FaFilePdf style={{ color: "#FF0000" }} />
                  <span>Intro.pdf</span>
                </td>
                <td>27 July 2023</td>
                <td>70 MB</td>
                <td className="owner-cell">
                  <div className="owner-info">
                    <img
                      src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg"
                      alt="Me"
                      className="owner-avatar"
                    />
                    <span>Me</span>
                  </div>
                </td>
                <td className="action-cell">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="file-name">
                  <FaVideo style={{ color: "#FF0000" }} />
                  <span>Demoworrking.mp4</span>
                </td>
                <td>24 July 2023 08:25 AM</td>
                <td>180 MB</td>
                <td className="owner-cell">
                  <div className="owner-info">
                    <img
                      src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg"
                      alt="Daniel Byrne"
                      className="owner-avatar"
                    />
                    <span>Daniel Byrne</span>
                  </div>
                </td>
                <td className="action-cell">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="file-name">
                  <FaMusic style={{ color: "#FFC107" }} />
                  <span>voice.mp3</span>
                </td>
                <td>27 July 2023</td>
                <td>80 MB</td>
                <td className="owner-cell">
                  <div className="owner-info">
                    <img
                      src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-07.jpg"
                      alt="Henriques"
                      className="owner-avatar"
                    />
                    <span>Henriques</span>
                  </div>
                </td>
                <td className="action-cell">
                  <FaStar className="star-icon" />
                  <FaEllipsisV className="more-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* upload section */}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay">
          <div className="upload-modal">
            <div className="modal-header">
              <h2>Upload File</h2>
              <button
                className="close-button"
                onClick={() => setShowUploadModal(false)}
              >
                ×
              </button>
            </div>

            <div className="upload-area">
              <div className="upload-dropzone">
                <div className="upload-icon">
                  <img src="/cloud-upload.png" alt="Upload" />
                </div>
                <p className="upload-text">Drag and drop a file to upload</p>
                <div className="upload-progress">
                  <p>3 of 1 files Uploaded</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="uploaded-files">
                <div className="file-item">
                  <div className="file-info">
                    <FaFolder className="file-icon" />
                    <div className="file-details">
                      <span className="file-name">latest-version.zip</span>
                      <span className="file-size">616 MB</span>
                    </div>
                  </div>
                  <div className="file-actions">
                    <button className="delete-btn">
                      <FaTrash />
                    </button>
                  </div>
                </div>

                <div className="file-item">
                  <div className="file-info">
                    <FaFileExcel className="file-icon" />
                    <div className="file-details">
                      <span className="file-name">Update work history.xls</span>
                      <span className="file-size">616 MB</span>
                    </div>
                  </div>
                  <div className="file-actions">
                    <button className="delete-btn">
                      <FaTrash />
                    </button>
                    <button className="pause-btn">
                      <FaPause />
                    </button>
                  </div>
                </div>

                <div className="file-item">
                  <div className="file-info">
                    <FaFile className="file-icon" />
                    <div className="file-details">
                      <span className="file-name">Updated Project.zip</span>
                      <span className="file-size">616 MB</span>
                    </div>
                  </div>
                  <div className="file-actions">
                    <button className="delete-btn">
                      <FaTrash />
                    </button>
                    <button className="retry-btn">
                      <FaRedo />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileManager;
