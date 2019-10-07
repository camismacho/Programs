	.section	.rodata
.LC0:
	.string	"hello world!"
.LC1:
	.string	"goodbye"
.LC2:
	.string	"second"
.LC3:
	.string	"printf call %s %d\n"
.LC4:
	.string	"and more"
.LC5:
	.string	"Hello World!"
	.text
<<<<<<< HEAD
	.globl	func
=======
	
.globl	func
>>>>>>> c355adf2383d54fc12ced3d611d5714a811f4701
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC0, %rsi
<<<<<<< HEAD
	call	puts

	popq	%rbp
	ret
	.globl	main
=======
	movl	$0, %eax
	call	puts


	popq	%rbp
	ret
	
.globl	main
>>>>>>> c355adf2383d54fc12ced3d611d5714a811f4701
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC1, %rsi
	movq	$.LC2, %rdi
	movl	$42, %eax
<<<<<<< HEAD
	call	func
=======
	movl	$0, %eax
	call	func

>>>>>>> c355adf2383d54fc12ced3d611d5714a811f4701
	movq	$.LC3, %rsi
	movq	$.LC4, %rdi
	movl	$42, %eax
	pushq	%rax
	movl	$4, %eax
	pushq	%rax
	movl	$5, %eax
	pushq	%rax
	movl	$2, %eax
	popq	%rcx
	addl	%ecx, %eax
	popq	%rcx
	addl	%ecx, %eax
	popq	%rcx
	addl	%ecx, %eax
<<<<<<< HEAD
	call	printf
	movq	$.LC5, %rsi
	call	puts

=======
	movl	$0, %eax
	call	printf

	movq	$.LC5, %rsi
	movl	$0, %eax
	call	puts


>>>>>>> c355adf2383d54fc12ced3d611d5714a811f4701
	popq	%rbp
	ret
