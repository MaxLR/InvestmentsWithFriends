export const fetchUser = (userId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/users/${userId}`
    })
  );
};

export const updateUser = (userId, formData) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/users/${userId}`,
      contentType: false,
      processData: false,
      dataType: 'json',
      data: formData
    })
  );
};
