

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const jobList = document.getElementById('job-list');

        data.forEach(job => {

            //create divs with a class name
            const jobDiv = document.createElement('div');
            const jobInfo = document.createElement('div');
            const jobNotes = document.createElement('div');

            jobDiv.className = 'job-div';
            jobInfo.className = 'job-info';
            jobNotes.className = 'job-notes';
            
            //create new elements for each specified entry
            const jobIcon = document.createElement('img');
            const jobCompany = document.createElement('h3');
            const jobPosition = document.createElement('p');
            const jobNew = document.createElement('h4');
            const jobPosted = document.createElement('p');
            const jobContract = document.createElement('p');
            const jobLocation = document.createElement('p');

            //fill in each element with json data
            jobIcon.src = `${job.logo}`;
            jobCompany.textContent = `${job.company}`;
            jobNew.textContent=`${job.new}`;
            jobPosition.textContent = `${job.position}`;
            jobPosted.textContent = `${job.postedAt}`;
            jobContract.textContent = `${job.contract}`;
            jobLocation.textContent = `${job.location}`;

            //append each entry
            jobDiv.appendChild(jobIcon);

            jobInfo.appendChild(jobCompany);
            jobInfo.appendChild(jobNew);
            jobInfo.appendChild(jobPosition);

            jobNotes.appendChild(jobPosted);
            jobNotes.appendChild(jobContract);
            jobNotes.appendChild(jobLocation);

            //append into another div
            jobDiv.appendChild(jobInfo);
            jobInfo.appendChild(jobNotes);

            //append the new divs into this main div
            jobList.appendChild(jobDiv);

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