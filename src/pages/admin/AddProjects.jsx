import React from "react";
import ProjectMetadataForm from "../../components/admin/forms/ProjectMetadataForm";
import GalleryUploadForm from "../../components/admin/forms/GalleryUploadForm";
import CreditsForm from "../../components/admin/forms/CreditsForm";
import StyleForm from "../../components/admin/forms/StyleForm";

const AddProjects = () => {
  return (
    <div className=" space-y-5">
      <ProjectMetadataForm />
      <GalleryUploadForm />
      <CreditsForm />
      <StyleForm />
    </div>
  );
};

export default AddProjects;
