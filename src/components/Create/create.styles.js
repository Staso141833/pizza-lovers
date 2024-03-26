export const createMainStackStyles = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  position: "reltaive",
  backgroundColor: "#f6f6f6",
  height: {
    xs: "130vh",
    sm: "100vh",
    md: "130vh",
    lg: "130vh",
    xl: "90vh",
  },
  overflow: "hidden",
};

export const createSecondaryStackStyles = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  position: "reltaive",
  backgroundColor: "#e7ca96",
  gap: 2,
  height: {
    xs: "130vh",
    sm: "100vh",
    md: "130vh",
    lg: "130vh",
    xl: "100%",
  },
  width: {
    xs: "130vh",
    sm: "100vh",
    md: "130vh",
    lg: "130vh",
    xl: "40%",
  },
  overflow: "hidden",
};

export const cardStyles = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  position: "absolute",
  zIndex: "1",
};

export const cardMediaStyles = {
  objectFit: "cover",
  opacity: "0.9",
  width: "100%",
  height: {
    xs: "110.2vh",
    sm: "85.2vh",
    md: "120.2vh",
    lg: "113.5vh",
    xl: "100%",
  },
};

export const titleFormButtonStackStyles = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  gap:1,
  zIndex: "2",
  left: "50%",
  top: "50%",
  transform: {
    xs: "translate(4.8%, 980%)",
    sm: "translate(5.3%, 367%)",
    md: "translate(1.4%, 336%)",
    lg: "translate(121%, 358%)",
    xl: "translate(-250%, -50%)",
  },
};

export const createTitleStyles = {
  fontWeight: "bold",
//   color: "#00A557",
  marginTop: {
    xs: "8px",
    sm: "10px",
    md: "12px",
    lg: "12px",
    xl: "18px",
  },
  letterSpacing: 1,
  textTransform: "uppercase",
  fontSize: {
    xs: "14px",
    sm: "20px",
    md: "22px",
    lg: "24px",
    xl: "26px",
  },
};

export const formGroupStyles = {
  justifyContent: "space-around",
  width: "100%",
};

export const formControlStyles = {
  mt: 1,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  gap: "12px",
  width: {
    xs: "90%",
    sm: "80%",
    md: "80%",
    lg: "80%",
    xl: "100%",
  },
};

export const createButtonStyles = {
  backgroundColor: "#00A35E",
  mb: 1,
};
