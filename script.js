

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const jobList = document.getElementById('job-list');

        data.forEach(job => {
            
            const jobItem = document.createElement('p');

            jobItem.textContent = `${job.company} ${job.position}`;

            jobList.appendChild(jobItem);

            // //create new items
            // const jobIcon = document.createElement('img');
            // const jobAge = document.createElement('p');
            // const jobFeatured = document.createElement('p');
            // const jobName = document.createElement('h4');
            // const jobPosition = document.createElement('p');

            // //set content to show specific parts of the JSON file
            // jobIcon.src = `${job.logo}`;
            // jobAge.textContent = `${job.new}`;
            // jobFeatured.textContent = `${job.featured}`;
            // jobName.textContent = `${job.company}`;
            // jobPosition.textContent = `${job.position}`;

            // //append each entry to the list
            // jobList.appendChild(jobIcon);
            // jobList.appendChild(jobAge); //have to fix later
            // jobList.appendChild(jobFeatured) //have to fix later
            // jobList.appendChild(jobName);
            // jobList.appendChild(jobPosition);
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error));