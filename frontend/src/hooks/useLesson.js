import { useState, useEffect } from 'react';

const useLessons = () => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLessons = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/lessons');
            if (!response.ok) {
                throw new Error('Failed to fetch lessons');
            }
            const data = await response.json();
            setLessons(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchLessonById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/lessons/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch lesson');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchLessons();
    }, []);

    return {
        lessons,
        loading,
        error,
        fetchLessonById,
    };
};

export default useLessons;
