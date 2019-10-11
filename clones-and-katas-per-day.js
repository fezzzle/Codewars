function clonewars(kataPerDay) {
  let capacityToDoKatas = kataPerDay;
  let totalKatas = 0;
  let clonesAndKatas = [1, 0];

  for (let i = kataPerDay; 0 < i; i--) {
      totalKatas += capacityToDoKatas * clonesAndKatas[0]
      clonesAndKatas[1] = totalKatas;
      capacityToDoKatas -= 1;
      if (i !== 1) clonesAndKatas[0] = clonesAndKatas[0] * 2;
  }
  return clonesAndKatas;
}

clonewars(5);