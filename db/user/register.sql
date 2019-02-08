insert into users3 (username, password, profile_pic)
values(
    ${username},
    ${password},
    ${profile_pic}
)
returning username, profile_pic, id;