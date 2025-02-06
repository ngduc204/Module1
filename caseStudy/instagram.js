class Instagram {
    constructor(id, fullName, userName, follower, following) {
        this.id = id;
        this.fullName = fullName;
        this.userName = userName;
        this.follower = follower;
        this.following = following;
        this.url = `https://www.instagram.com/${userName}/`;
    }
}

class UserManager {
    constructor() {
        this.users = [
            new Instagram(1, "Nguyễn Đức", "ngduc.04", 895, 218),
            new Instagram(2, "Đỗ Thu Hương", "gnouhh_uht", 334, 61),
            new Instagram(3, "Cao Tung Lam", "__lamcao", 591, 547),
            new Instagram(4, "Hoàng Phương", "hanja.danba", 22, 24),
            new Instagram(5, "Gia Long", "towf.114", 1045, 340),
            new Instagram(6, "Tanhh", "tanhh._.11", 116, 68),
        ];
        this.idCounter = 7;

    }
    // TODO: Tạo hàm hiển thị
    render() {
        const tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        for (let user of this.users) {
            this.createUserRow(user);
        }
    }

    createUserRow(user) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.fullName}</td>
            <td><a href="${user.url}" target="_blank">${user.userName}</a></td>
            <td>${user.follower}</td>
            <td>${user.following}</td>
            <td>${this.createActionButton(user.id)}</td>`;
        const tbody = document.getElementById("tbody");
        tbody.appendChild(tr);
    }

    createActionButton(userID) {
        return `<button type="button" class="update" onclick="userManager.updateUser(${userID})">Update</button>
                    <button type="button" class="delete" onclick="userManager.confirmDeleteUser(${userID})">Delete</button>`;
    }
    // TODO: Thêm mới người dùng
    addUser(fullName, userName, follower, following) {
        const newUser = new Instagram(this.idCounter++, fullName, userName, follower, following);
        this.users.push(newUser);
        this.render();
    }
    // TODO: Cập nhật thông tin người dùng
    updateUser(id) {
        const user = this.findUserByID(id);
        if (user) {
            document.getElementById("userID").value = user.id;
            document.getElementById("fullName").value = user.fullName;
            document.getElementById("userName").value = user.userName;
            document.getElementById("follower").value = user.follower;
            document.getElementById("following").value = user.following;
        }
    }
    //TODO: Lưu thông tin người dùng sau khi cập nhật hoặc thêm người dùng mới
    saveUser() {
        const userId = document.getElementById("userID").value;
        const fullName = document.getElementById("fullName").value;
        const userName = document.getElementById("userName").value;
        const follower = document.getElementById("follower").value;
        const following = document.getElementById("following").value;

        if (!fullName || !userName || !follower || !following) {
            alert("❌ Mời nhập đầy đủ thông tin ❗❓");
            return;
        }

        if (userId) {
            // Cập nhật người dùng
            const user = this.findUserByID(parseInt(userId));
            if (user) {
                user.fullName = fullName;
                user.userName = userName;
                user.follower = follower;
                user.following = following;
            }
        } else {
            // Thêm người dùng mới
            this.addUser(fullName, userName, follower, following);
        }
        this.clearInputFields();
    }

    clearInputFields() {
        document.getElementById("userID").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("userName").value = "";
        document.getElementById("follower").value = "";
        document.getElementById("following").value = "";
    }

    findUserByID(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                return this.users[i];
            }
        }
        return null;
    }

    deleteUser(id) {
        this.users = this.users.filter(function (user) {
            return user.id !== id;
        });
        this.render();
    }

    confirmDeleteUser(id) {
        const isConfirmed = confirm("Bạn có chắc chắn muốn xóa người dùng này không?💢💢💢");
        if (isConfirmed) {
            this.deleteUser(id);
        }
    }
}

const userManager = new UserManager();
userManager.render();

const confirmButton = document.getElementById("confirm");
confirmButton.addEventListener("click", function () {
    userManager.saveUser();
    userManager.render();
});
