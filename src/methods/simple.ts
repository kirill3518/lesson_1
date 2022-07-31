export const isSimpNum = (par: number): boolean => {

    if (par < 2) {
        return false;
    } else if (par === 2) {
        return true;
    } else if (par % 2 === 0) {
        return false;
    }

    for (let i: number = 3; i < par; i += 2) {

        if (par % i === 0) {
            return false;
        }
    }
    return true;
}
