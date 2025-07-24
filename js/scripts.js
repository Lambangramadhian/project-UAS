// Page navigation logic
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the requested page
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Form submission handlers
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Booking service sent successfully! We will contact you for confirmation.');

            // This will trigger showPageFromHash()
            location.hash = 'home';

            // Optional: reset form
            this.reset();
        });
        
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login successful! Redirecting to admin page...');
            location.hash = 'mechanic-list';
        });
        
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registration successful! Please log in with your new account.');
            location.hash = 'login';
        });
        
        document.getElementById('mechanicForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('The mechanic data was saved successfully!');
            location.hash = 'mechanic-list';
        });
        
        document.getElementById('transactionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Transaction saved successfully!');
            location.hash = 'transaction-list';
        });
        
        // Gallery functionality
        const galleryModal = document.getElementById('galleryModal');
        const modalImage = document.getElementById('modalImage');
        
        galleryModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-img');
            modalImage.src = imgSrc;
        });
        
        // Admin functions
        function viewMechanicDetail(id) {
            alert(`Displays the details of the mechanic with the ID: ${id}`);
        }
        
        function editMechanic(id) {
            alert(`Edits the mechanic with the ID: ${id}`);
        }
        
        function deleteMechanic(id) {
            if(confirm(`Are you sure you want to delete the mechanic with ID: ${id}?`)) {
                alert(`The mechanic with ID: ${id} has been deleted`);
            }
        }
        
        function viewTransaction(id) {
            alert(`Displays the details of the transaction with ID: ${id}`);
        }
        
        function editTransaction(id) {
            alert(`Edits the transaction with ID: ${id}`);
        }
        
        function deleteTransaction(id) {
            if(confirm(`Are you sure you want to delete the transaction with ID: ${id}?`)) {
                alert(`The transaction with ID: ${id} has been deleted`);
            }
        }

        function showPageFromHash() {
            const hash = window.location.hash || "#home";
            const targetId = hash.replace("#", "");

            document.querySelectorAll(".page").forEach(page => {
                if (page.id === targetId) {
                    page.style.display = "block";
                    setTimeout(() => {
                        page.classList.add("active");
                    }, 10);
                } else {
                    page.classList.remove("active");
                    setTimeout(() => {
                        page.style.display = "none";
                    }, 300);
                }
            });

            window.scrollTo(0, 0);
        }

        window.addEventListener("DOMContentLoaded", showPageFromHash);
        window.addEventListener("hashchange", showPageFromHash);

        // Initialize AdminLTE components
        document.addEventListener('DOMContentLoaded', function() {
        }); 