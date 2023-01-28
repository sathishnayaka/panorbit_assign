export const userDetails = async () => {
    const res = await fetch('https://panorbit.in/api/users.json',
    {
        method:'GET'
    }
    );
    return await res.json();
    
}