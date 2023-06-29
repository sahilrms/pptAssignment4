function missing(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [[], []];
  
    for (let num of nums1) {
      if (!set2.has(num)) {
        result[0].push(num);
      }
    }
  
    for (let num of nums2) {
      if (!set1.has(num)) {
        result[1].push(num);
      }
    }
  
    return result;
  }
  
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  
  const answer = missing(nums1, nums2);
  console.log(answer); 
  