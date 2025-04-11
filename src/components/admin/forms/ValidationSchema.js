// validationSchema.js
import * as Yup from "yup";

export const projectValidationSchema = Yup.object({
  title: Yup.string().required("Project title is required"),
  description: Yup.string().required("Project description is required"),
  projectType: Yup.string()
    .oneOf(["photo", "motion", "special"])
    .required("Project type is required"),
  status: Yup.string()
    .oneOf(["online", "offline"])
    .required("Project status is required"),
  order: Yup.number()
    .typeError("Order must be a number")
    .required("Grid order is required"),
  client: Yup.string().nullable(),
  year: Yup.number()
    .nullable()
    .transform((_, val) => (val === "" ? null : Number(val)))
    .typeError("Year must be a number"),
  location: Yup.string().nullable(),

  // 👇 Gallery validation added here
  gallery: Yup.array()
    .min(1, "At least one media item is required")
    .of(
      Yup.object().shape({
        type: Yup.string().required(),
        // url: Yup.string().required("Media URL is required"),
        // alt: Yup.string().required("Alt text is required"),
        // width: Yup.string().required("Width is required"),
        // height: Yup.string().required("Height is required"),
        // order: Yup.number()
        //   .typeError("Order must be a number")
        //   .required("Order is required"),
        // displaySize: Yup.string()
        //   .oneOf(["full", "half"])
        //   .required("Display size is required"),
        // isMain: Yup.boolean(),
      })
    ),

  credits: Yup.array()
    .min(1, "At least one credit is required")
    .of(
      Yup.object().shape({
        role: Yup.string().required("Role is required"),
        name: Yup.string().required("Name is required"),
        order: Yup.number()
          .typeError("Order must be a number")
          .required("Order is required"),
      })
    ),
});
