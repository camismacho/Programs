	.section	.rodata
.LC0:
	.string	"hello world!"
.LC1:
	.string	"goodbye"
.LC2:
	.string	"second"
.LC3:
	.string	"printf call %s %d %s\n"
.LC4:
	.string	"and more"
.LC5:
	.string	"poop"
.LC6:
	.string	"%s %s %s %s %s\n"
.LC7:
	.string	"one"
.LC8:
	.string	"two"
.LC9:
	.string	"three"
.LC10:
	.string	"four"
.LC11:
	.string	"five"
.LC12:
	.string	"Hello World!"
	.text
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC0, %rdi
	call	puts

	popq	%rbp
	movl	$0, %eax
	ret
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC1, %rdi
	movq	$.LC2, %rsi
	movl	$42, %edx
	movl	, %rdx
	call	func
	movq	$.LC3, %rdi
	movq	$.LC4, %rsi
	movl	$42, %edx
	pushq	%rdx
	movl	$4, %edx
	pushq	%rdx
	movl	$5, %edx
	pushq	%rdx
	movl	$2, %edx
	popq	%rcx
	addl	%ecx, %edx
	popq	%rcx
	addl	%ecx, %edx
	popq	%rcx
	addl	%ecx, %edx
	movl	, %rdx
	movq	$.LC5, %rcx
	call	printf
	movq	$.LC6, %rdi
	movq	$.LC7, %rsi
	movq	$.LC8, %rdx
	movq	$.LC9, %rcx
	movq	$.LC10, %r8
	movq	$.LC11, %r9
	call	printf
	movq	$.LC12, %rdi
	call	puts

	popq	%rbp
	movl	$0, %eax
	ret
