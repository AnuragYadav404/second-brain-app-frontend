export const useUserAuthCredential = () => {
    return localStorage.getItem("token")
}