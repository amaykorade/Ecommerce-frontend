const fetchWithToken = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };


    try {
        const response = await fetch(url, {
            ...options,
            headers,
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch data');
        }

        return data;
    } catch (error) {
        throw new Error(error.message || 'Network error');
    }
};

export default fetchWithToken;