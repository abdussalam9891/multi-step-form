const validators = {
  personal: {
    name: (value) => (!value.trim() ? "Name is required" : null),

    email: (value) => (!value.trim() ? "Email is required" : null),

    phone: (value) => (!value.trim() ? "Phone is required" : null),
  },
};

function validateStep(step, data) {
  const newErrors = {};

  if (step === 1) {
    const personalErrors = {};

    for (const field in validators.personal) {
      const error = validators.personal[field](data.personal[field]);
      if (error) personalErrors[field] = error;
    }

    if (Object.keys(personalErrors).length > 0) {
      newErrors.personal = personalErrors;
    }
  }

  return newErrors;
}

const validateSingleField = (section, field, value) => {
  const error = validators[section][field](value);

  setErrors((prev) => {
    const newErrors = { ...prev };

    if (error) {
      if (!newErrors[section]) newErrors[section] = {};
      newErrors[section][field] = error;
    } else {
      if (newErrors[section]) {
        delete newErrors[section][field];

        if (Object.keys(newErrors[section]).length === 0) {
          delete newErrors[section];
        }
      }
    }
    return newErrors;
  });
};
