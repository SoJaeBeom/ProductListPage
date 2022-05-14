export default function api() {
  const myHeaders: Headers = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj',
  );

  (async () => {
    const response = await fetch(
      'https://api.json-generator.com/templates/ePNAVU1sgGtQ/data',
      {
        headers: myHeaders,
      },
    );
    return response.json();
  })();
}
