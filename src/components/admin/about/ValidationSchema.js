import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  hero: Yup.object().shape({
    title: Yup.string().required("Required"),
    text: Yup.string().required("Required"),
    style: Yup.object().shape({
      backgroundColor: Yup.string().required("Required"),
      textColor: Yup.string().required("Required"),
      titleFont: Yup.object().shape({
        family: Yup.string().required("Required"),
        size: Yup.string().required("Required"),
        weight: Yup.string().required("Required"),
        letterSpacing: Yup.string().required("Required"),
      }),
      textFont: Yup.object().shape({
        family: Yup.string().required("Required"),
        size: Yup.string().required("Required"),
        weight: Yup.string().required("Required"),
        letterSpacing: Yup.string().required("Required"),
      }),
    }),
  }),
  sections: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Required"),
      text: Yup.string().required("Required"),
      image: Yup.mixed().required("Image is required"),
      style: Yup.object().shape({
        backgroundColor: Yup.string().required("Required"),
        textColor: Yup.string().required("Required"),
        titleFont: Yup.object().shape({
          family: Yup.string().required("Required"),
          weight: Yup.string().required("Required"),
          letterSpacing: Yup.string().required("Required"),
        }),
        textFont: Yup.object().shape({
          family: Yup.string().required("Required"),
          weight: Yup.string().required("Required"),
          letterSpacing: Yup.string().required("Required"),
        }),
      }),
    })
  ),
});
