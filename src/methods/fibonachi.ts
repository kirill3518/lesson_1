export const getFibNums = (par: number): number[] => {
    if (par === 0) {
        return [0];
    } else if (par === 1) {
        return [0, 1];
    } else {
        let a: number[] = [0, 1];
        let b: number = 0;
        while (b < par - 1) {
            let acc: number = a[a.length - 2] + a[a.length - 1];
            a.push(acc);
            b++;
        }
        return a;
    }
}
