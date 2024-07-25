function skillsMember() {
  var member = document.getElementById('member');
  var memberText = member.innerHTML;
  var memberArray = memberText.split(' ');
  var memberSkills = memberArray.slice(1);
  member.innerHTML = memberSkills.join(' ');
}