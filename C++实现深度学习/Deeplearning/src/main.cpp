#include<opencv2/opencv.hpp>
#include<iostream>
#include <string>
using namespace cv;

void ImageThreshold(String str) {
	Mat image = imread(str);
	Mat binary;
	cvtColor(image, binary, COLOR_BGR2GRAY);
	imshow("test_opencv_srtup", binary);
	waitKey(0);
}
int main() {
	String str = "cat.png"; // ע���ļ�·����������Ӧ��ͼƬ
	ImageThreshold(str);
	return 0;
}
