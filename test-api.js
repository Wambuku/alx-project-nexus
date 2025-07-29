// Quick test to verify TMDB API key works
const API_KEY = '11c2d864c0456c8d412a01109830c4';
const testUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

console.log('🧪 Testing TMDB API...');
console.log('🔗 URL:', testUrl);

fetch(testUrl)
  .then(response => {
    console.log('📊 Status:', response.status);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  })
  .then(data => {
    console.log('✅ SUCCESS! Got', data.results.length, 'movies');
    console.log('🎬 First movie:', data.results[0].title);
    console.log('🖼️ Poster path:', data.results[0].poster_path);
    console.log('🔗 Full poster URL:', `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`);
  })
  .catch(error => {
    console.error('❌ FAILED:', error);
  });