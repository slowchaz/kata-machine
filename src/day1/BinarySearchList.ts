export default function bs_list(haystack: number[], needle: number): boolean {
  let high = haystack.length;
  let low = 0;

  do {
    const m = Math.floor(low + (high - low) / 2);

    const v = haystack[m];
    
    if (v === needle)
      return true;
    else if (v > needle)
      high = m;
    else
      low = m + 1;


  } while (low < high);

  return false;
}






/*
search(arr, lo, hi, n)

[   |   ]
o       n

do {
m = lo + (hi - lo) / 2
v = arr[m]
if v = n
  return true;
else if v > m
  lo = m
else
  hi = m + 1
} while (lo < hi)



  */
