import { getLyrics } from "../services/api";
import React, { useState, useEffect } from "react";

function SongDetails({ song }) {
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        setLoading(true);
        setError(null);
        const lyricsData = await getLyrics(song.artist, song.title);
        setLyrics(lyricsData);
      } catch (err) {
        setError("Impossible de récupérer les paroles");
        console.error("Error fetching lyrics:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLyrics();
  }, [song.artist, song.title]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{song.title}</h2>
      <h3 className="text-xl text-green-600 mb-4">{song.artist}</h3>

      {song.album && (
        <p className="text-gray-600 mb-6">
          <span className="font-semibold">Album:</span> {song.album}
        </p>
      )}

      <div className="border-t pt-4">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Paroles :</h4>
        
        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-600"></div>
            <p className="mt-2 text-gray-600">Chargement des paroles...</p>
          </div>
        )}
        
        {error && (
          <div className="text-red-500 mb-4">{error}</div>
        )}
        
        {!loading && !error && lyrics && (
          <pre className="whitespace-pre-wrap font-sans text-gray-800 bg-gray-50 p-4 rounded-lg overflow-x-auto">
            {lyrics}
          </pre>
        )}
      </div>
    </div>
  );
}

export default SongDetails;
