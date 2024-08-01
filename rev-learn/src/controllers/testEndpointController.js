
export const test2 = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8010/test", {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        'Accept': 'text/plain'
      }
    });
  
    console.log('HTTP status code:', response.status);
    console.log('HTTP status text:', response.statusText);
    
    if (response.headers.get('Content-Length') === '0') {
      console.log('Empty response');
    } else {
      const data = await response.text();
      console.log(data);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}  
