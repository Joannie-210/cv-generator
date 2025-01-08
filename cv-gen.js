document.addEventListener("DOMContentLoaded", () => {
  const cvForm = document.getElementById("cvForm");

  
  cvForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

   
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const bio = document.getElementById("textspace-one").value;
    const phone = document.getElementById("number").value;
    const address = document.getElementById("textTwo").value;
    const cert = document.getElementById("dropdown").value;
    const workExperience = document.getElementById("textspace-three").value;
    const skills = document.getElementById("textspace-four").value;
    const profileImage = document.getElementById("file").files[0];
    const interest = document.getElementById("textspace-five").value;
    const cvButton = document.getElementById("cv-button");

   
    if (!firstName || !lastName || !email || !phone || !workExperience || !skills || !bio || !address || !cert || !profileImage) {
      alert("Please fill in all required fields.");
      return;
    }

    generateCV({
      firstName,
      lastName,
      email,
      bio,
      phone,
      address,
      cert,
      interest,
      workExperience,
      skills,
      profileImage,
      cvButton
    });
  });
});

function generateCV(data) {
  // Create CV container
  const cvContainer = document.querySelector(".cvcont");
  cvContainer.style.border = "1px solid #ccc";
  cvContainer.style.padding = "20px 0px 20px 20px";
  cvContainer.style.margin = "30px auto 20px auto";
  cvContainer.style.height = "auto";
  cvContainer.style.backgroundColor = "white";

  // Create first div with class-one

  const divOne = document.querySelector(".class-one");
  divOne.style.width = "100%";
  divOne.style.display = "flex";

  const subOne = document.querySelector(".sub-one");
  subOne.style.width = "60%";
  subOne.style.height = "100%";

  const subTwo = document.querySelector(".sub-two");
  subTwo.style.width = "40%";
  subTwo.style.display =  "flex";
  subTwo.style.justifyContent = "center";
  subTwo.style.alignItems = "start";
subTwo.style.flexWrap = "wrap";
subTwo.style.backgroundColor = "purple";

  const divTwo = document.querySelector(".class-two");
  divTwo.style.width = "90%";
  divTwo.style.paddingLeft = "20px";
  

  
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  if (data.profileImage) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style.width = "130px";
      img.style.height = "130px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "100%";
      img.style.marginBottom = "2px"; 
      imgContainer.appendChild(img);
    };
    reader.readAsDataURL(data.profileImage);
  }
  subOne.appendChild(imgContainer);

 
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  infoContainer.innerHTML = `
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Address:</strong> ${data.address}</p>
    <p><strong>Certificate:</strong> ${data.cert}</p>
  `;
  subOne.appendChild(infoContainer); 

  const firstNameDiv = document.createElement("h2");
  firstNameDiv.innerHTML = `${data.firstName}`
  subTwo.appendChild(firstNameDiv);

  const lastNameDiv = document.createElement("h2");
  lastNameDiv.innerHTML = `${data.lastName}`
  subTwo.appendChild(lastNameDiv);

  const bioDiv = document.createElement("div");
  bioDiv.innerHTML = `<h3>About</h3><p>${data.bio}</p><hr>`
  divTwo.appendChild(bioDiv);
 
  const workExperienceDiv = document.createElement("div");
  workExperienceDiv.innerHTML = `<h3>Work Experience</h3><p>${data.workExperience}</p><hr>`;
  divTwo.appendChild(workExperienceDiv);

 
  const skillsDiv = document.createElement("div");
  skillsDiv.innerHTML = `<h3>Skills</h3><p>${data.skills}</p><hr>`;
  divTwo.appendChild(skillsDiv);

  const interestDiv = document.createElement("div");
  interestDiv.innerHTML = `<h3>Interests</h3><p>${data.interest}</p><hr>`;
  divTwo.appendChild(interestDiv);

  cvButton.style.display = "block";
  
  cvContainer.appendChild(cvButton);

 
  document.body.appendChild(cvContainer);
}
