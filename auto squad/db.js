// Simple in-memory database for Auto Squad
// In a production environment, you would use a proper database like MongoDB, MySQL, etc.

// Initial cars data
const cars = [
  {
    id: 16,
    model: "BMW 5 Series 530D M Sport",
    year: 2014,
    owner: "Single owner",
    km: 50300,
    description: "BMW 530D M Sport 3.0 (Dec 2014, almost 2015),50,200 km driven, single-owner, company-registered, 50,300 km driven with full service history, new tyres, and battery. Blue with tan interior, rear entertainment system, 2 keys, original paint, scratchless body, no faults or error codes, insured till Dec 2025.",
    image: "bmw5.png",
    interiorId: "bmw_5_series",
    price: 2271000
  },
  {
    id: 17,
    model: "Harley-Davidson Street 750",
    year: 2017,
    owner: "2nd owner",
    km: 12600,
    description: "Harley XG750, Nov 2017 model, second owner, ~12,600 km driven, well-maintained with all electronics and mechanicals in perfect working condition. Insurance expired, available for inspection at Mumbai Central. Direct buyers only — no dealers, no ownership transfer required.",
    image: "harley1.png",
    interiorId: "harley_750",
    price: 291000
  },
  {
    id: 18,
    model: "Skoda Yeti Active",
    year: 2012,
    owner: "2nd owner",
    km: 100000,
    description: "2012 Skoda Yeti Active, second owner, ~1,00,000 km driven, mechanically sound with a strong engine and smooth performance. Recently replaced tyres and battery, tan-black interior, Android screen with reverse camera — just take and drive.",
    image: "yeti.png",
    interiorId: "skoda_yeti",
    price: 421000
  },
  {
    id: 19,
    model: "BMW 5 Series 520d",
    year: 2013,
    owner: "Single owner",
    km: 51000,
    description: "BMW 5 Series 520d (2012/13), single-hand driven by an advocate, only 51,000 km driven with full service history and valid insurance till May 2025. Scratchless exterior, clean interior, mechanically flawless with no fault codes — just take and drive",
    image: "bmw21.png",
    interiorId: "bmw_5_series",
    price: 1141000
  },
  {
    id: 20,
    model: "Mitsubishi Pajero SFX 4x4",
    year: 2010,
    owner: "2nd owner",
    km: 91000,
    description: "Mitsubishi Pajero SFX 4x4 Manual, Sept 2010 (almost 2011), 2nd owner, 91,000 km driven, in pristine condition with perfect 4WD, new tyres, updated original-style interior, and touchscreen system. Iconic purple-white combo, mechanically flawless — a rare find in Mumbai. Serious buyers only, come see the beast in person.",
    image: "pajero.jpg",
    interiorId: "pajero",
    price: 711000
  },
  {
    id: 21,
    model: "Volkswagen Polo Highline",
    year: 2013,
    owner: "2nd owner",
    km: 57000,
    description: "Volkswagen polo petrol highline of 2013 2nd owner driven around 57000kms only it is a type 2 version with black head lamps very well maintained and kept clean and original exterior beige colour interior no work mechanically superb",
    image: "polo.jpg",
    interiorId: "polo",
    price: 311000
  },
  {
    id: 22,
    model: "Skoda Octavia 2.0 Elegance",
    year: 2015,
    owner: "2nd owner",
    km: 70000,
    description: "Skoda octavia 2.0 elegance diesel automatic 2nd owner doctor owner vehicle transfer from wife to husband driven around 70000kms with service history valid comprehensive insurance upto Sept 2025 with panaromic roof clean and near interior with 7d mats scratchless exterior no work",
    image: "skoda.png",
    interiorId: "octavia",
    price: 791000
  },
  {
    id: 23,
    model: "Honda Jazz i-VTEC 1.2 X",
    year: 2012,
    owner: "2nd owner",
    km: 57000,
    description: "2012 Honda Jazz i vetc 1.2 X variant 2nd owner driven only 57000kms with record car is extremely good in condition no work at all just take and drive condition valid insurance upto may 2025",
    image: "jazz.jpg",
    interiorId: "jazz",
    price: 251000
  },
  {
    id: 24,
    model: "Mercedes-Benz GL-Class (2013)",
    year: 2013,
    owner: "3rd owner",
    km: 92500,
    description: "Mercedes ML 350 CDI Avantgarde 2013, diesel automatic, 3rd owner, ~90,000 km driven with company service records. Clean customized interior, brand-new tyres with bills, automatic suspension and height control working perfectly — no faults, no pending work.",
    image: "benz4.png",
    interiorId: "ml_350",
    price: 1621000
  },
  {
    id: 25,
    model: "Volkswagen Vento TDI 1.6 Comfortline",
    year: 2012,
    owner: "Single owner",
    km: 49000,
    description: "Volkswagen Vento TDI 1.6 Comfortline, Nov 2012, single owner, only 49,000 km driven with full records. Scratchless exterior, clean interior, enhanced styling, and mechanically flawless — no faults, no pending work.",
    image: "vento.jpg",
    interiorId: "vento",
    price: 291000
  },
  {
    id: 1,
    model: "Toyota Altis",
    year: 2010,
    owner: "3rd owner",
    km: 82000,
    description: "2010 Toyota Altis, 3rd owner, well-maintained, driven 82,000 km. Excellent condition with smooth performance and reliable service history.",
    image: "altis.jpg",
    interiorId: "altis",
    price: 450000
  },
  {
    id: 2,
    model: "Hyundai Venue",
    year: 2020,
    owner: "Single owner",
    km: 83000,
    description: "2020 Hyundai Venue Diesel SX with sunroof, single owner, driven 83,000 km. Well-maintained, offering excellent performance and top-tier features.",
    image: "venue.jpg",
    interiorId: "venue",
    price: 950000
  },
  {
    id: 3,
    model: "Volkswagen Jetta Highline",
    year: 2012,
    owner: "2nd owner",
    km: 30000,
    description: "2012 Volkswagen Jetta Highline, automatic diesel, 2nd owner, driven just 30,000 km. Well-maintained with premium features and exceptional performance.",
    image: "jetta.jpg",
    interiorId: "jetta",
    price: 750000
  },
  
  
];

// Users data
const users = [
  {
    id: 1,
    username: "user1",
    password: "password123", // In a real app, passwords should be hashed
    email: "user1@example.com",
    name: "John Doe",
    isAdmin: false
  },
  {
    id: 2,
    username: "Abdullah",
    password: "9920867077", // Changed from admin123 to 9920867077
    email: "abdullah@autosquad.com",
    name: "Abdullah",
    isAdmin: true
  }
];

// Session management
let currentUser = null;

// Helper functions for car management
function getAllCars() {
  return [...cars];
}

function getCarById(id) {
  return cars.find(car => car.id === Number(id)) || null;
}

function addCar(carData) {
  const newId = cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 1;
  const newCar = {
    id: newId,
    ...carData
  };
  cars.push(newCar);
  return newCar;
}

function updateCar(id, carData) {
  const index = cars.findIndex(car => car.id === Number(id));
  if (index === -1) return null;
  
  const updatedCar = { ...cars[index], ...carData };
  cars[index] = updatedCar;
  return updatedCar;
}

function deleteCar(id) {
  const index = cars.findIndex(car => car.id === Number(id));
  if (index === -1) return false;
  
  cars.splice(index, 1);
  return true;
}

// User authentication
function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    currentUser = { ...user };
    delete currentUser.password; // Don't include password in session data
    return currentUser;
  }
  return null;
}

function logout() {
  currentUser = null;
  return true;
}

function getCurrentUser() {
  return currentUser;
}

function registerUser(userData) {
  // Check if username or email already exists
  if (users.some(u => u.username === userData.username || u.email === userData.email)) {
    return null;
  }
  
  const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  const newUser = {
    id: newId,
    ...userData,
    isAdmin: false // New users are never admins by default
  };
  
  users.push(newUser);
  return newUser;
}

// Export all functions
window.DB = {
  cars: {
    getAll: getAllCars,
    getById: getCarById,
    add: addCar,
    update: updateCar,
    delete: deleteCar
  },
  auth: {
    login,
    logout,
    getCurrentUser,
    register: registerUser
  }
};

(function(window) {
    // Check if DB is already defined
    if (window.DB) return;

    // Theme preferences
    const themeSettings = {
        getThemePreference() {
            return localStorage.getItem('theme') || 'dark';
        },
        
        setThemePreference(theme) {
            localStorage.setItem('theme', theme);
            this.applyTheme(theme);
        },
        
        applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        },
        
        toggleTheme() {
            const currentTheme = this.getThemePreference();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.setThemePreference(newTheme);
            return newTheme;
        },
        
        initTheme() {
            const savedTheme = this.getThemePreference();
            this.applyTheme(savedTheme);
        }
    };

    // Initialize DB
    const DB = {
        // Initialize localStorage if needed
        init: function() {
            if (!localStorage.getItem('users')) {
                localStorage.setItem('users', JSON.stringify([
                    {
                        id: '1',
                        name: 'Abdullah',
                        username: 'Abdullah',
                        password: '9920867077',  // Changed from admin123 to 9920867077
                        isAdmin: true
                    }
                ]));
            }
            
            if (!localStorage.getItem('cars')) {
                localStorage.setItem('cars', JSON.stringify([
                    {
                        id: '16',
                        model: 'BMW 5 Series 530D M Sport',
                        year: 2014,
                        owner: 'Single owner',
                        km: 50300,
                        price: 2271000,
                        image: 'mercedes.png',
                        description: 'BMW 530D M Sport 3.0 (Dec 2014, almost 2015), single-owner, company-registered, 50,300 km driven with full service history, new tyres, and battery. Blue with tan interior, rear entertainment system, 2 keys, original paint, scratchless body, no faults or error codes, insured till Dec 2025.',
                        interiorId: 'bmw_5_series'
                    },
                    {
                        id: '17',
                        model: 'Harley-Davidson Street 750',
                        year: 2017,
                        owner: '2nd owner',
                        km: 12600,
                        price: 291000,
                        image: 'venue.jpg',
                        description: 'Harley XG750, Nov 2017 model, second owner, ~12,600 km driven, well-maintained with all electronics and mechanicals in perfect working condition. Insurance expired, available for inspection at Mumbai Central. Direct buyers only — no dealers, no ownership transfer required.',
                        interiorId: 'harley_750'
                    },
                    {
                        id: '18',
                        model: 'Skoda Yeti Active',
                        year: 2012,
                        owner: '2nd owner',
                        km: 100000,
                        price: 421000,
                        image: 'skoda.png',
                        description: '2012 Skoda Yeti Active, second owner, ~1,00,000 km driven, mechanically sound with a strong engine and smooth performance. Recently replaced tyres and battery, tan-black interior, Android screen with reverse camera — just take and drive.',
                        interiorId: 'skoda_yeti'
                    },
                    {
                        id: '19',
                        model: 'BMW 5 Series 520d',
                        year: 2013,
                        owner: 'Single owner',
                        km: 51000,
                        price: 1077000,
                        image: 'mercedes.png',
                        description: 'BMW 5 Series 520d (2012/13), single-hand driven by an advocate, only 51,000 km driven with full service history and valid insurance till May 2025. Scratchless exterior, clean interior, mechanically flawless with no fault codes — just take and drive',
                        interiorId: 'bmw_5_series'
                    },
                    {
                        id: '20',
                        model: 'Mitsubishi Pajero SFX 4x4',
                        year: 2010,
                        owner: '2nd owner',
                        km: 91000,
                        price: 711000,
                        image: 'pajero.jpg',
                        description: 'Mitsubishi Pajero SFX 4x4 Manual, Sept 2010 (almost 2011), 2nd owner, 91,000 km driven, in pristine condition with perfect 4WD, new tyres, updated original-style interior, and touchscreen system. Iconic purple-white combo, mechanically flawless — a rare find in Mumbai.',
                        interiorId: 'pajero'
                    },
                    {
                        id: '21',
                        model: 'Volkswagen Polo Highline',
                        year: 2013,
                        owner: '2nd owner',
                        km: 57000,
                        price: 311000,
                        image: 'polo.jpg',
                        description: 'Volkswagen polo petrol highline of 2013 2nd owner driven around 57000kms only it is a type 2 version with black head lamps very well maintained and kept clean and original exterior beige colour interior no work mechanically superb',
                        interiorId: 'polo'
                    },
                    {
                        id: '22',
                        model: 'Skoda Octavia 2.0 Elegance',
                        year: 2015,
                        owner: '2nd owner',
                        km: 70000,
                        price: 791000,
                        image: 'skoda.png',
                        description: 'Skoda octavia 2.0 elegance diesel automatic 2nd owner doctor owner vehicle transfer from wife to husband driven around 70000kms with service history valid comprehensive insurance upto Sept 2025 with panaromic roof clean and near interior with 7d mats scratchless exterior no work',
                        interiorId: 'octavia'
                    },
                    {
                        id: '23',
                        model: 'Honda Jazz i-VTEC 1.2 X',
                        year: 2012,
                        owner: '2nd owner',
                        km: 57000,
                        price: 251000,
                        image: 'venue.jpg',
                        description: '2012 Honda Jazz i vetc 1.2 X variant 2nd owner driven only 57000kms with record car is extremely good in condition no work at all just take and drive condition valid insurance upto may 2025',
                        interiorId: 'jazz'
                    },
                    {
                        id: '24',
                        model: 'Mercedes-Benz ML 350 CDI Avantgarde',
                        year: 2013,
                        owner: '3rd owner',
                        km: 90000,
                        price: 1621000,
                        image: 'mer.jpg',
                        description: 'Mercedes ML 350 CDI Avantgarde 2013, diesel automatic, 3rd owner, ~90,000 km driven with company service records. Clean customized interior, brand-new tyres with bills, automatic suspension and height control working perfectly — no faults, no pending work.',
                        interiorId: 'ml_350'
                    },
                    {
                        id: '25',
                        model: 'Volkswagen Vento TDI 1.6 Comfortline',
                        year: 2012,
                        owner: 'Single owner',
                        km: 49000,
                        price: 291000,
                        image: 'vento.jpg',
                        description: 'Volkswagen Vento TDI 1.6 Comfortline, Nov 2012, single owner, only 49,000 km driven with full records. Scratchless exterior, clean interior, enhanced styling, and mechanically flawless — no faults, no pending work.',
                        interiorId: 'vento'
                    },
                    {
                        id: '1',
                        model: 'Toyota Corolla Altis',
                        year: 2018,
                        owner: 'Single Owner',
                        km: 45000,
                        price: 850000,
                        image: 'altis.jpg',
                        description: 'Well maintained Toyota Corolla Altis with all service records. The car is in excellent condition both mechanically and aesthetically.',
                        interiorId: 'altis'
                    },
                    {
                        id: '2',
                        model: 'Hyundai Venue',
                        year: 2020,
                        owner: 'Single Owner',
                        km: 25000,
                        price: 950000,
                        image: 'venue.jpg',
                        description: 'Hyundai Venue with low mileage and excellent condition. The car comes with a manufacturer warranty and has been regularly serviced.',
                        interiorId: 'venue'
                    },
                    {
                        id: '3',
                        model: 'Volkswagen Jetta',
                        year: 2017,
                        owner: 'Second Owner',
                        km: 65000,
                        price: 750000,
                        image: 'jetta.jpg',
                        description: 'Well maintained Volkswagen Jetta with premium features. The car has been regularly serviced and is in excellent mechanical condition.',
                        interiorId: 'jetta'
                    },
                    {
                        id: '4',
                        model: 'Mercedes-Benz C-Class',
                        year: 2019,
                        owner: 'Single Owner',
                        km: 35000,
                        price: 3500000,
                        image: 'benz.png',
                        description: 'Luxury Mercedes-Benz C-Class with premium features and excellent condition. Low mileage and full service history available.',
                        interiorId: 'benz'
                    }
                ]));
            }
            
            // Initialize theme on page load
            themeSettings.initTheme();
        },
        
        // Theme settings
        theme: themeSettings,
        
        // File handling utilities
        fileUtils: {
            // Convert file to base64 for storage
            fileToBase64(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            },
            
            // Save uploaded images to local storage
            async saveImage(file, prefix = 'car_') {
                try {
                    const base64 = await this.fileToBase64(file);
                    const filename = prefix + Date.now() + '_' + file.name.replace(/\s+/g, '-');
                    
                    // Store in localStorage (in a real app, you'd upload to a server)
                    const images = JSON.parse(localStorage.getItem('uploadedImages') || '{}');
                    images[filename] = base64;
                    localStorage.setItem('uploadedImages', JSON.stringify(images));
                    
                    return filename;
                } catch (error) {
                    console.error('Error saving image:', error);
                    return null;
                }
            },
            
            // Batch save multiple images
            async saveImages(files, prefix = 'car_') {
                const filenames = [];
                for (let i = 0; i < files.length; i++) {
                    const filename = await this.saveImage(files[i], prefix);
                    if (filename) filenames.push(filename);
                }
                return filenames;
            },
            
            // Get image data
            getImage(filename) {
                const images = JSON.parse(localStorage.getItem('uploadedImages') || '{}');
                
                // Check if it's a base64 stored image
                if (images[filename]) {
                    return images[filename];
                }
                
                // Otherwise assume it's a file path
                return filename;
            },
            
            // Delete an image
            deleteImage(filename) {
                const images = JSON.parse(localStorage.getItem('uploadedImages') || '{}');
                if (images[filename]) {
                    delete images[filename];
                    localStorage.setItem('uploadedImages', JSON.stringify(images));
                    return true;
                }
                return false;
            }
        },

        // User authentication
        auth: {
            getCurrentUser: function() {
                const userJson = sessionStorage.getItem('currentUser');
                return userJson ? JSON.parse(userJson) : null;
            },
            
            login: function(username, password) {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const user = users.find(u => u.username === username && u.password === password);
                
                if (user) {
                    // Don't store password in session
                    const { password, ...userWithoutPassword } = user;
                    sessionStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
                    return userWithoutPassword;
                }
                
                return null;
            },
            
            register: function(name, username, password) {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                
                // Check if username already exists
                if (users.some(u => u.username === username)) {
                    return { success: false, message: 'Username already exists' };
                }
                
                // Create new user
                const newUser = {
                    id: Date.now().toString(),
                    name,
                    username,
                    password,
                    isAdmin: false
                };
                
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                
                // Auto login after registration
                const { password: _, ...userWithoutPassword } = newUser;
                sessionStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
                
                return { success: true, user: userWithoutPassword };
            },
            
            logout: function() {
                sessionStorage.removeItem('currentUser');
            }
        },
        
        // Car management
        cars: {
            getAll: function() {
                return JSON.parse(localStorage.getItem('cars') || '[]');
            },
            
            getById: function(id) {
                const cars = this.getAll();
                return cars.find(car => car.id === id) || null;
            },
            
            add: function(carData) {
                const cars = this.getAll();
                const newCar = {
                    id: Date.now().toString(),
                    interiorImages: [],
                    ...carData
                };
                
                cars.push(newCar);
                localStorage.setItem('cars', JSON.stringify(cars));
                return newCar;
            },
            
            update: function(id, carData) {
                const cars = this.getAll();
                const index = cars.findIndex(car => car.id === id);
                
                if (index !== -1) {
                    // If no interior images are provided in the update, keep the existing ones
                    if (!carData.interiorImages && cars[index].interiorImages) {
                        carData.interiorImages = cars[index].interiorImages;
                    }
                    
                    cars[index] = { ...cars[index], ...carData };
                    localStorage.setItem('cars', JSON.stringify(cars));
                    return cars[index];
                }
                
                return null;
            },
            
            delete: function(id) {
                const cars = this.getAll();
                const carToDelete = cars.find(car => car.id === id);
                
                if (carToDelete) {
                    // Delete associated images if they are stored in our system
                    if (carToDelete.image && carToDelete.image.startsWith('car_')) {
                        DB.fileUtils.deleteImage(carToDelete.image);
                    }
                    
                    // Delete interior images
                    if (carToDelete.interiorImages && carToDelete.interiorImages.length > 0) {
                        carToDelete.interiorImages.forEach(img => {
                            if (img.startsWith('interior_')) {
                                DB.fileUtils.deleteImage(img);
                            }
                        });
                    }
                    
                    const filteredCars = cars.filter(car => car.id !== id);
                    localStorage.setItem('cars', JSON.stringify(filteredCars));
                    return true;
                }
                
                return false;
            },
            
            search: function(query) {
                if (!query) return this.getAll();
                
                query = query.toLowerCase();
                const cars = this.getAll();
                
                return cars.filter(car => 
                    car.model.toLowerCase().includes(query) ||
                    car.year.toString().includes(query) ||
                    car.owner.toLowerCase().includes(query) ||
                    car.description.toLowerCase().includes(query)
                );
            },
            
            // Add interior images to a car
            addInteriorImages: function(carId, imageFilenames) {
                const car = this.getById(carId);
                if (!car) return false;
                
                // Initialize interiorImages array if it doesn't exist
                if (!car.interiorImages) car.interiorImages = [];
                
                // Add new images
                car.interiorImages = [...car.interiorImages, ...imageFilenames];
                
                // Update the car
                return this.update(carId, { interiorImages: car.interiorImages });
            },
            
            // Remove an interior image from a car
            removeInteriorImage: function(carId, imageFilename) {
                const car = this.getById(carId);
                if (!car || !car.interiorImages) return false;
                
                // Remove the image
                const updatedImages = car.interiorImages.filter(img => img !== imageFilename);
                
                // Update the car
                return this.update(carId, { interiorImages: updatedImages });
            }
        }
    };
    
    // Initialize DB
    DB.init();
    
    // Expose DB to window
    window.DB = DB;
})(window); 