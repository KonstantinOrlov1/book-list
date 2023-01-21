export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const addBook = (data) => {
  let books = localStorage.getItem("books");

  if (!books) {
    books = [];
  } else {
    books = JSON.parse(books);
  }

  books = JSON.stringify([...books, data]);
  localStorage.setItem("books", books);
};

export const serializeForm = async (form) => {
  form = form.querySelectorAll("input");

  let data = {};

  for (let field of form) {
    console.log(field.type, field.name, field.value);
    if (field.type === "file") {
      data[field.name] = await toBase64(field.files[0]);
    } else if (field.type === "submit") {
      continue;
    } else {
      data[field.name] = field.value;
    }
  }

  return data;
};
