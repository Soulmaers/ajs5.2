export default function spec(obj) {
  const arr = [];

  obj.special.forEach((el) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = el;
    arr.push({
      id, name, icon, description,
    });
  });

  return arr;
}
