export const getPostTitle = (value, noteNumber) => {
  // Отримуємо заголовок найвищого рівня
  const regex = /<h1>(.*?)<\/h1>/i;
  const match = value.match(regex);
  const extractedHeading = match ? match[1] : '';
  return extractedHeading ? extractedHeading : `Note`
}


export const getPostBody = (value) => {
  // Видаляємо заголовок найвищого рівня
  const regex = /<h1>(.*?)<\/h1>/i;
  const contentWithoutHeading = value.replace(regex, '');

  // Видаляємо всі інші HTML-теги
  const contentWithoutTags = contentWithoutHeading.replace(/<[^>]+>/g, '');

  // Повертаємо вміст без заголовка
  return contentWithoutTags.trim();
}
