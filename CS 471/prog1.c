int main() {

    int A[100];
    char *S;

    A[0] = ('J') + ('o' * 256) + ('s' * 256 * 256) + ('e' * 256 * 256 * 256);
    A[2] = (10) + (0);

    S = (char*) A;

    printf("My name is %s\n", S);
}