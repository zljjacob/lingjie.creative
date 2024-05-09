// #include<iostream>

// void add(int x){
//     x+=1;
// }

// int main(){
//     int x = 1;
//     add(x);
//     std::cout << x << std::endl;
//     return 0;
// }

#include <iostream>
#include <vector>

void add_one(std::vector<int> &vec) {
    vec.push_back(1);
}

int main() {
    std::vector<int> numbers = {1, 2, 3};
    add_one(numbers);
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    return 0;
}