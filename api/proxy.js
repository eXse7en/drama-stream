// api/proxy.js
export default async function handler(req, res) {
  const { path, ...query } = req.query;
  
  const url = `https://restxdb.onrender.com/api/${path}?` + 
    new URLSearchParams(query).toString();
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy failed' });
  }
}
