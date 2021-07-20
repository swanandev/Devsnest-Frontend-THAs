

export const useQuery = (usLoc) => {
    return new URLSearchParams(usLoc().search);
}   